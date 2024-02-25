import {ElemGroupDynamic} from "../elems/elemGroup/ElemGroupDynamic";
import {crudEnums} from "../../layrQuery/types/crudEnums";
import {QuerySchema} from "../src/querySchema";
import {MrkLib} from "../../lib/MrkLib";
import {layrQueryRun} from "../../layrQuery/layrQueryRun";
import {querySchemaToQuery} from "./querySchemaToQuery";


export async function querySchemaRun(querySchema: QuerySchema, querySchemaArgs?: any) {

    let query = await querySchemaToQuery(querySchema, querySchemaArgs)

    let result = await layrQueryRun(query)
    return result
}