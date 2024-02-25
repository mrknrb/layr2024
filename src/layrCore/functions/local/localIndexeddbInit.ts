import {querySourceLocalRequestType} from "../../../layrQuery/querySources/local/querySourceLocalRequestType";
import {querySourceLocalSubTypeEnums} from "../../../layrQuery/querySources/local/querySourceLocalSubTypeEnums";
import {DBStoreDocNames} from "../../DBStoreDocNames";
import {crudEnums} from "../../../layrQuery/types/crudEnums";
import {layrQueryRun} from "../../../layrQuery/layrQueryRun";
import {QueryEnums} from "../../../layrQuery/types/queryEnums";

// --- Letrehozza a local indexeddb adatokat, ha nem leteznek ---
export async function localIndexeddbInit() {

    let stores = [
        DBStoreDocNames.storeUser,
        DBStoreDocNames.storeNotifications

    ]

    for (const storesKey in stores) {
        let localreqstore: querySourceLocalRequestType = {
            subType: querySourceLocalSubTypeEnums.store,
            dbId: DBStoreDocNames.dbLayr,
            crudEnum: crudEnums.create,
            newData: stores[storesKey]
        }
        await layrQueryRun({
            type: QueryEnums.local,
            requestData: localreqstore
        })

    }


}