import {QueryEnums} from "./queryEnums";
import {crudEnums} from "./crudEnums";

export type QueryObject<requestDataType> = {
    type: QueryEnums
    requestData: requestDataType
//crudEnum?:CrudEnums//nem tudom, hogy jo otlet-e
}