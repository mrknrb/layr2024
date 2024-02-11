import {ElemBaseSave} from "../elemBase/ElemBaseSave";
import {omap} from "../../../lib/omap";
import {ElemFormatsEnums} from "../../../layrUI/views/comps/pageView/elemUIs/elemFormatsEnums";

export interface ElemGroupSave extends ElemBaseSave {
    srcPointers: { elems: string, dataResult?: string }// a dataresult az array tipusuaknak kellene
    listFilter?: any
    list?: boolean
}