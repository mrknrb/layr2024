import {querySourceLocalRequestSchema} from "../../../layrQuery/querySources/local/querySourceLocalRequestSchema";
import {querySourceLocalSubTypeEnums} from "../../../layrQuery/querySources/local/querySourceLocalSubTypeEnums";
import {DBStoreDocNames} from "../../DBStoreDocNames";
import {crudEnums} from "../../../layrQuery/types/crudEnums";
import {layrQueryCommands} from "../../../layrQuery/layrQueryCommands";
import {QueryEnums} from "../../../layrQuery/types/queryEnums";

// --- Letrehozza a local indexeddb adatokat, ha nem leteznek ---
export async function localIndexeddbInit() {


    let localreqstore: querySourceLocalRequestSchema = {
        subType: querySourceLocalSubTypeEnums.store,
        dbId: DBStoreDocNames.dbLayr,
        crudEnum: crudEnums.create,
        newData: DBStoreDocNames.storeUser
    }
    await layrQueryCommands.run({
        type: QueryEnums.local,
        requestData: localreqstore
    })


}