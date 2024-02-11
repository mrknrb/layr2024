import {ElemGroupDynamic} from "../elems/elemGroup/ElemGroupDynamic";
import {crudEnums} from "../../layrQuery/types/crudEnums";
import {QuerySchema} from "../src/querySchema";
import {MrkLib} from "../../lib/MrkLib";
import {layrQueryCommands} from "../../layrQuery/layrQueryCommands";
import {QueryObject} from "../../layrQuery/types/queryObject";
import {findJsonPath} from "./findElemTree/findJsonPath";


export async function querySchemaToQuery(querySchema: QuerySchema, querySchemaArgs: any) {

    let requestData = MrkLib.mergeObjects(querySchema.requestDataStatic, querySchemaArgs)
    let result: QueryObject = {type: querySchema.sourceType, requestData}
    return result
}