import {layrCoreStore, layrCoreStoreUpdater} from "../../LayrCoreStore";
import {omf} from "../../../lib/omf";
import {crudEnums} from "../../../layrQuery/types/crudEnums";
import {querySchemaRun} from "../querySchemaRun";
import {ResultFull} from "../../ResultData/ResultFull";
import {ElemGroupDynamic} from "../../elems/elemGroup/ElemGroupDynamic";

// mukodik
export function findElemByPath(element: ResultFull, elemPath: string[]) {

    let foundElem: ResultFull | undefined = undefined
    elemLoop(element, elemPath)

    function elemLoop(actualElem: ResultFull, actualElemPath: string[]) {
        if (actualElemPath.length === 0) {
            foundElem = actualElem
        } else {
            if (actualElemPath[0] === "../") {
                actualElemPath.shift()
                elemLoop(actualElem.parentResultId, actualElemPath)

            } else {
                let act = actualElem as ElemGroupDynamic
                let child = act.childrenElemsDynamic?.find(value => {
                    return value.resultSave.elemId === actualElemPath[0]

                })
                if (!child) return

                actualElemPath.shift()

                elemLoop(child, actualElemPath)


            }


        }

    }

    return foundElem

}
