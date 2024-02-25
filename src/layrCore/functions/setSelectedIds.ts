import {QuerySchema} from "../src/querySchema";
import {MrkLib} from "../../lib/MrkLib";
import {QueryObject} from "../../layrQuery/types/queryObject";
import {layrCoreStoreUpdater} from "../LayrCoreStore";
import {omf} from "../../lib/omf";
import {ResultAllIdType} from "../ResultData/ResultAllIdType";

export function setSelectedIds(resultIds: ResultAllIdType[]) {

    layrCoreStoreUpdater.updateStore((storeCopy, storeUpdatedResult) => {


        storeCopy.selectedElems = resultIds


        storeUpdatedResult(storeCopy)
    })

}