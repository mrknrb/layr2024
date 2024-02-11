import {ResultFull} from "../../ResultData/ResultFull";
import {ElemBaseSave} from "../../elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../../elems/elemBase/ElemBaseDynamic";
import {layrCoreStore} from "../../LayrCoreStore";
import {omf} from "../../../lib/omf";

type DiffType = 'create' | 'delete' | 'update';

export interface objectModificationDifference {
    path: string[];
    diffType: DiffType;
}

export function objectModificationCompare(originalObject: object, modifiedObject: object): objectModificationDifference[] {
    const differencesArray: objectModificationDifference[] = [];

    function compareValues(path: string[], original: any, modified: any) {
        if (original !== modified) {
            differencesArray.push({path, diffType: 'update'});
        }
    }

    function compareObjects(path: string[], original: any, modified: any) {
        for (const key in original) {
            const newPath = [...path, key];

            if (!(key in modified)) {
                differencesArray.push({path: newPath, diffType: 'delete'});
            } else if (typeof original[key] === 'object' && typeof modified[key] === 'object') {
                compareObjects(newPath, original[key], modified[key]);
            } else {
                compareValues(newPath, original[key], modified[key]);
            }
        }

        for (const key in modified) {
            const newPath = [...path, key];

            if (!(key in original)) {
                differencesArray.push({path: newPath, diffType: 'create'});
            }
        }
    }

    compareObjects([], originalObject, modifiedObject);

    return differencesArray;
}
