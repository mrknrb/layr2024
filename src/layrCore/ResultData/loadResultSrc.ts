import {ElemBaseSave} from "../elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../elems/elemBase/ElemBaseDynamic";
import {ResultFull} from "./ResultFull";
import {ResultTypes} from "./ResultTypes";
import {omf} from "../../lib/omf";
import {querySchemaRun} from "../functions/querySchemaRun";
import {layrCoreStore, layrCoreStoreUpdater} from "../LayrCoreStore";
import {MrkLib} from "../../lib/MrkLib";
import {newResultFull} from "./newResultFull";
import {srcActionDefaultNames} from "../src/srcActionDefaultNames";
import {omap} from "../../lib/omap";

export async function loadResultSrc<resultSaveType extends omap<ElemBaseSave>, resultDynamicType extends omap<ElemBaseDynamic>>(resultFull: ResultFull<resultSaveType, resultDynamicType>, elemId: string, srcId: string) {


    if (!resultFull) return
    let elem = omf.get(resultFull.resultSave, elemId)

    if (elem === undefined || !elem.srcSaveList) return
    let srcActual = omf.get(elem.srcSaveList, srcId)
    let getSrcAction = srcActual.srcActionList.find((value, index) => {
        return value.srcActionName === srcActionDefaultNames.get
    })
    if (getSrcAction === undefined) return

    let querySchemaResult = await querySchemaRun(getSrcAction.querySchema)
    if (querySchemaResult === undefined) return


    let resultsRegiIndex = layrCoreStore.resultFullDataArray.findIndex(value => {

        return (value.parentResultId === resultFull.resultId && value.parentSrcId === srcId)
    })


    let resultFullChild: ResultFull<resultSaveType, resultDynamicType> = {
        resultId: MrkLib.generateShortId(),
        resultSave: querySchemaResult,
        parentResultId: resultFull.resultId,
        resultType: resultFull.resultType,
        parentSrcId: srcId,
        parentElemId: elemId
    }
    if (resultsRegiIndex === -1) {

        await newResultFull(resultFullChild)
    } else {

        await layrCoreStoreUpdater.updateStore((storeCopy, storeUpdatedResult) => {
            resultFullChild.resultId = storeCopy.resultFullDataArray[resultsRegiIndex].resultId
            storeCopy.resultFullDataArray[resultsRegiIndex] = resultFullChild
            storeUpdatedResult(storeCopy)
        })

    }


}