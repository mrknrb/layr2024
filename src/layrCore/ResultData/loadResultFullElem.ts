import {ResultFull} from "./ResultFull";
import {ResultTypes} from "./ResultTypes";
import {ElemBaseSave} from "../elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../elems/elemBase/ElemBaseDynamic";
import {omf} from "../../lib/omf";
import {crudEnums} from "../../layrQuery/types/crudEnums";
import {querySchemaRun} from "../functions/querySchemaRun";
import {layrCoreStore} from "../LayrCoreStore";
import {newResultFull} from "./newResultFull";
import {MrkLib} from "../../lib/MrkLib";

export async function loadResultFullElem<resultSaveType extends ElemBaseSave, resultDynamicType extends ElemBaseDynamic>(resultFull: ResultFull<resultSaveType, resultDynamicType>) {
    if (resultFull.resultType !== ResultTypes.layrElem || resultFull.resultSave.srcSaveList === undefined || resultFull.resultSave.srcPointers === undefined) return
    omf.forEach(resultFull.resultSave.srcPointers, async (srcId, key) => {
        if (resultFull.resultSave.srcSaveList === undefined) return
        let srcActual = omf.get(resultFull.resultSave.srcSaveList, srcId)
        let createSrcPart = srcActual.srcParts.find((value, index) => {
            return value.crudEnum === crudEnums.get
        })
        if (createSrcPart === undefined) return
        let querySchemaResult = await querySchemaRun(createSrcPart.querySchema)
        if (querySchemaResult === undefined) return
        let resultRegiId = layrCoreStore.resultFullDataArray.findIndex(value => {
            return value.resultId === resultFull.resultId

        })
        let resultFullChild: ResultFull<resultSaveType, resultDynamicType> = {
            resultId: MrkLib.generateShortId(),
            resultSave: querySchemaResult,
            parentResultId: resultFull.resultId,
            srcResults: omf.create(),
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