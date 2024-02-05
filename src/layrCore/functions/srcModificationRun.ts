import {ResultFull} from "../ResultData/ResultFull";
import {layrCoreStore} from "../LayrCoreStore";
import {ElemBaseSave} from "../elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../elems/elemBase/ElemBaseDynamic";
import {omf} from "../../lib/omf";
import {objectModificationCompare} from "./objectModificationCompare";

export function srcModificationRun(resultFullId: string, pointerName: string, newData: any) {

    let resultFullParent: ResultFull<ElemBaseSave, ElemBaseDynamic> | undefined = layrCoreStore.resultFullDataArray.find(value => {
        return value.resultId === resultFullId

    })

    if (!resultFullParent || !resultFullParent.resultSave.srcPointers || !resultFullParent.resultSave.srcSaveList || !resultFullParent.srcResults) return
    let srcSaveId = omf.get(resultFullParent.resultSave.srcPointers, pointerName)
    let srcSave = omf.get(resultFullParent.resultSave.srcSaveList, srcSaveId)

    let resultFullChild: ResultFull<ElemBaseSave, ElemBaseDynamic> | undefined = layrCoreStore.resultFullDataArray.find(value => {

        return value.resultId === omf.get(resultFullParent.srcResults, srcSaveId)

    })
    if (!resultFullChild) return

    let comparisonArray = objectModificationCompare(resultFullChild.resultSave, newData)


}