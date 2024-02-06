import {queryRunFunction} from "../../layrQuery/types/queryRunFunction";
import {QueryEnums} from "../../layrQuery/types/queryEnums";
import {FromSchema} from "json-schema-to-ts";

export interface QuerySchema<requestType = {}, responseType = {}> {
    requestType?: requestType
    responseType?: responseType
    sourceType: QueryEnums
    requestDataStatic?: any
}
