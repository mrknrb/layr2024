import {objectModificationDifference} from "./generic/objectModificationCompare";
import {SrcSave} from "../src/srcSave";
import {SrcActionType} from "../src/SrcActionType";
import {srcActionDefaultNames} from "../src/srcActionDefaultNames";

export function srcQueryTaskGenerator(diffArray: objectModificationDifference[], srcSave: SrcSave) {
    // bemenet: az osszes difference a jsonban. path es type
//

    //minden differencere kikeresni a megfelelo srcpartot es az input data pathet berakni
    //ha ugyanaz a query kettore is jo, akkor ne futtasd ketszer, hanem egyesitsd
    //ha vmire nincs querytask, akkor azt jelezd hibakent

    let result: (SrcActionType | undefined) [] = []//az index alapjan lehet beazonositani oket. feltelezi, hogy egy src illik egyhez (mert ez a logikus)
    diffArray.forEach((diff, index) => {
        let result2 = undefined
        for (let index = 0; index < srcSave.srcActionList.length; index++) {
            const srcAction = srcSave.srcActionList[index];

            if (srcAction.srcActionName === srcActionDefaultNames.update && comparison(srcAction.resultRootPath, diff.path)) {
                // If the path2 is equal or deeper than path1, add it to the result

                result2 = srcAction
                index = srcSave.srcActionList.length
            }

        }
        if (result2) {
            result.push(result2)
        } else {
            result.push(undefined)
        }

    })
    return result
}

function comparison(srcpartPath: string[], differencepath: string[]) {

    for (let i = 0; i < srcpartPath.length; i++) {
        if (i >= differencepath.length || differencepath[i] !== srcpartPath[i]) {
            // If any level differs, or the pathToCheck is shorter, it's not equal or deeper
            return false;
        }
    }
    // If all levels match and pathToCheck is at least as long as referencePath, it's equal or deeper
    return true;

}

export function srcUpdateTasksGenerator(pathArray1: string[][], pathArray2: string[][]): string[][] {
    const result: string[][] = [];

    for (const path1 of pathArray1) {
        for (const path2 of pathArray2) {
            if (isPathEqualOrDeeper(path2, path1)) {
                // If the path2 is equal or deeper than path1, add it to the result
                result.push(path2);
            }
        }
    }

    return result;
}

function isPathEqualOrDeeper(pathToCheck: string[], referencePath: string[]): boolean {
    // Compare each level of the paths
    for (let i = 0; i < referencePath.length; i++) {
        if (i >= pathToCheck.length || pathToCheck[i] !== referencePath[i]) {
            // If any level differs, or the pathToCheck is shorter, it's not equal or deeper
            return false;
        }
    }

    // If all levels match and pathToCheck is at least as long as referencePath, it's equal or deeper
    return true;
}
