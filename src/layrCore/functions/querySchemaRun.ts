import {ElemGroupDynamic} from "../elems/elemGroup/ElemGroupDynamic";
import {crudEnums} from "../../layrQuery/types/crudEnums";
import {QuerySchema} from "../queryBundle/querySchema";
import {MrkLib} from "../../lib/MrkLib";
import {layrQueryCommands} from "../../layrQuery/layrQueryCommands";
import {querySchemaToQuery} from "./querySchemaToQuery";


export async function querySchemaRun(querySchema: QuerySchema, querySchemaArgs?: any) {

    let query = await querySchemaToQuery(querySchema, querySchemaArgs)

    let result = await layrQueryCommands.run(query)
    return result
}