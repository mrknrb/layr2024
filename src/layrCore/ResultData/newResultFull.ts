import {ResultFull} from "./ResultFull";
import {MrkLib} from "../../lib/MrkLib";
import {omf} from "../../lib/omf";
import {ResultTypes} from "./ResultTypes";
import {layrCoreStoreUpdater} from "../LayrCoreStore";

export async function newResultFull<resultSaveType, resultDynamicType>(resultFull: ResultFull<resultSaveType, resultDynamicType>) {


    await layrCoreStoreUpdater.updateStore((storeCopy, storeUpdatedResult) => {
        storeCopy.resultFullDataArray.push(resultFull)

        storeUpdatedResult(storeCopy)
    })

}