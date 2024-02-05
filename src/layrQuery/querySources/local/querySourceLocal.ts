import {querySourceLocalRequestSchema} from "./querySourceLocalRequestSchema";
import {queryRunFunction} from "../../types/queryRunFunction";
import {QuerySourceLocalSubTypesGet} from "./querySourceLocalSubTypesGet";
import {omf} from "../../../lib/omf";
import {querySourceLocalSubTypesAll} from "./querySourceLocalSubTypesAll";

export let querySourceLocal: queryRunFunction = async (requestData: querySourceLocalRequestSchema) => {

    let a = omf.get(querySourceLocalSubTypesAll, requestData.crudEnum)
    let b = omf.get(a, requestData.subType)
    return b(requestData)

}