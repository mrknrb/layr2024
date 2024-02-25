import {QueryEnums} from "../../layrQuery/types/queryEnums";

export interface QuerySchema<requestType = {}, responseType = {}> {
    requestJSONType?: requestType
    responseJSONType?: responseType
    responseJSONFieldError?: Object
    sourceType: QueryEnums
    requestDataStatic?: any
}
