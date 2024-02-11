import {ResultFull} from "./ResultFull";
import {ResultTypes} from "./ResultTypes";
import {ElemBaseSave} from "../elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../elems/elemBase/ElemBaseDynamic";
import {omf} from "../../lib/omf";
import {querySchemaRun} from "../functions/querySchemaRun";
import {layrCoreStore} from "../LayrCoreStore";
import {newResultFull} from "./newResultFull";
import {MrkLib} from "../../lib/MrkLib";
import {srcActionDefaultNames} from "../src/srcActionDefaultNames";
import {deleteSrcResults} from "./deleteResultFull";

export async function loadResultFullElem<resultSaveType extends ElemBaseSave, resultDynamicType extends ElemBaseDynamic>(resultFull: ResultFull<resultSaveType, resultDynamicType>) {

    if (resultFull.resultType !== ResultTypes.layrElem || resultFull.resultSave.srcSaveList === undefined || resultFull.resultSave.srcPointers === undefined) return
    await omf.forEachAsync(resultFull.resultSave.srcPointers, async (srcId, key) => {

        await deleteSrcResults(resultFull.resultId, srcId)


        if (resultFull.resultSave.srcSaveList === undefined) return
        let srcActual = omf.get(resultFull.resultSave.srcSaveList, srcId)
        let getSrcAction = srcActual.srcActionList.find((value, index) => {
            return value.srcActionName === srcActionDefaultNames.get
        })
        if (getSrcAction === undefined) return

        let querySchemaResult = await querySchemaRun(getSrcAction.querySchema)
        if (querySchemaResult === undefined) return
        let resultRegiId = layrCoreStore.resultFullDataArray.findIndex(value => {
            return value.resultId === resultFull.resultId

        })
        let resultFullChild: ResultFull<resultSaveType, resultDynamicType> = {
            resultId: MrkLib.generateShortId(),
            resultSave: querySchemaResult,
            parentResultId: resultFull.resultId,
            srcResultIds: omf.create(),
            resultType: resultFull.resultType,
            parentSrcId: srcId
        }
        if (resultRegiId === undefined) {

            await newResultFull(resultFullChild)
        } else {
            // layrCoreStore.resultFullDataArray.splice(resultRegiId)


            await newResultFull(resultFullChild)
        }

    })


}