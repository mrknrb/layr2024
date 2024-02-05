import {layrQueryCommands} from "../../layrQuery/layrQueryCommands";
import {QueryEnums} from "../../layrQuery/types/queryEnums";
import {QueryObject} from "../../layrQuery/types/queryObject";
import {querySourceLocalRequestSchema} from "../../layrQuery/querySources/local/querySourceLocalRequestSchema";
import {querySourceLocalSubTypeEnums} from "../../layrQuery/querySources/local/querySourceLocalSubTypeEnums";
import {DBStoreDocNames} from "../DBStoreDocNames";
import {crudEnums} from "../../layrQuery/types/crudEnums";

export async function getAllLocalUserStoreDocIds() {

    let query: QueryObject<querySourceLocalRequestSchema<any>>
    query = {
        type: QueryEnums.local,
        requestData: {
            subType: querySourceLocalSubTypeEnums.doc,
            dbId: DBStoreDocNames.dbLayr,
            storeId: DBStoreDocNames.storeUser,
            crudEnum: crudEnums.get
        }

    }
    let result = await layrQueryCommands.run(query)
    return result
}