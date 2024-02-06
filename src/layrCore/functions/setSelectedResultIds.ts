import {QuerySchema} from "../src/querySchema";
import {MrkLib} from "../../lib/MrkLib";
import {QueryObject} from "../../layrQuery/types/queryObject";
import {layrCoreStoreUpdater} from "../LayrCoreStore";
import {omf} from "../../lib/omf";

export function setSelectedResultIds(resultIds: string[]) {

    layrCoreStoreUpdater.updateStore((storeCopy, storeUpdatedResult) => {

        storeCopy.selectedResultIds = resultIds


        storeUpdatedResult(storeCopy)
    })

}