import {layrCoreStore, layrCoreStoreUpdater} from "../../LayrCoreStore";
import {omf} from "../../../lib/omf";
import {crudEnums} from "../../../layrQuery/types/crudEnums";
import {querySchemaRun} from "../querySchemaRun";
import {ResultFull} from "../../ResultData/ResultFull";
import {ElemGroupDynamic} from "../../elems/elemGroup/ElemGroupDynamic";

export function findJsonPath(JSONObject: any, JSONPath: string[]) {

    let foundElem: any | undefined = undefined
    elemLoop(JSONObject, JSONPath)

    function elemLoop(actualElem: any, actualElemPath: string[]) {
        if (actualElemPath.length === 0) {
            foundElem = actualElem
        } else {

            let act = actualElem
            let child = act[actualElemPath[0]]
            if (!child) return

            actualElemPath.shift()

            elemLoop(child, actualElemPath)
        }
    }

    return foundElem
}
