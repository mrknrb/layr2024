import {querySourceLocalSubTypeEnums} from "./querySourceLocalSubTypeEnums";
import {crudEnums} from "../../types/crudEnums";

export type querySourceLocalRequestSchema<dataType> = {
    crudEnum: crudEnums
    subType: querySourceLocalSubTypeEnums
    dbId?: string
    storeId?: string
    docId?: string | number
    objectPath?: string[]
    newData?: dataType
}