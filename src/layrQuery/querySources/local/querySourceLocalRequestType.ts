import {querySourceLocalSubTypeEnums} from "./querySourceLocalSubTypeEnums";
import {crudEnums} from "../../types/crudEnums";
import {Static, Type} from "@sinclair/typebox";

type querySourceLocalRequestType_regi<dataType = any> = {
    crudEnum: crudEnums
    subType: querySourceLocalSubTypeEnums
    dbId?: string
    storeId?: string
    docId?: string | number
    objectPath?: string[]
    newData?: dataType
}


export let querySourceLocalRequestJSONType = Type.Object({
    dbId: Type.Optional(Type.String()),
    storeId: Type.Optional(Type.String()),
    docId: Type.Optional(Type.String()),
    crudEnum: Type.Enum(crudEnums),
    subType: Type.Enum(querySourceLocalSubTypeEnums),
    objectPath: Type.Optional(Type.Array(Type.String())),
    newData: Type.Optional(Type.Any())
})
export type querySourceLocalRequestType = Static<typeof querySourceLocalRequestJSONType>