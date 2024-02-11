import {ElemBaseSave} from "../elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../elems/elemBase/ElemBaseDynamic";
import {ResultFull} from "./ResultFull";
import {ResultTypes} from "./ResultTypes";
import {omf} from "../../lib/omf";
import {querySchemaRun} from "../functions/querySchemaRun";
import {layrCoreStore} from "../LayrCoreStore";
import {MrkLib} from "../../lib/MrkLib";
import {newResultFull} from "./newResultFull";
import {srcActionDefaultNames} from "../src/srcActionDefaultNames";

export async function updateResultSrcData<resultSaveType extends ElemBaseSave, resultDynamicType extends ElemBaseDynamic>(resultFull: ResultFull<resultSaveType, resultDynamicType>, srcId: string, updateData: any) {
    if (resultFull.resultType !== ResultTypes.layrElem || resultFull.resultSave.srcSaveList === undefined || resultFull.resultSave.srcPointers === undefined) return


    if (resultFull.resultSave.srcSaveList === undefined) return
    let srcActual = omf.get(resultFull.resultSave.srcSaveList, srcId)
    let updateSrcPart = srcActual.srcActionList.find((value, index) => {
        return value.srcActionName === srcActionDefaultNames.update
    })
    if (updateSrcPart === undefined) return
    //a  resultRootPathet kihagyom, egyszerusitett
    let querySchemaResult = await querySchemaRun(updateSrcPart.querySchema, {})


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


}