import {ElemBaseSave} from "../elemBase/ElemBaseSave";

export interface ElemGroupSave extends ElemBaseSave {
    srcPointers: { elems: string, dataResult?: string }// a dataresult az array tipusuaknak kellene
    elemFormat?: {
        autoInvisible?: boolean

    }
    listFilter?: any

}