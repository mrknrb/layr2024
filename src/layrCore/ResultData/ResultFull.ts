import {ElemBaseSave} from "../elems/elemBase/ElemBaseSave";
import {omap} from "../../lib/omap";
import {ElemBaseDynamic} from "../elems/elemBase/ElemBaseDynamic";
import {ResultTypes} from "./ResultTypes";

export interface ResultFull<resultSaveType, resultDynamicType> {
    resultId: string
    resultType: ResultTypes
    resultSave: resultSaveType //tobb elemframe van egy resultban
    resultDynamic?: resultDynamicType  // ha elemframedata, akkor ide jon a dynamic. az elemframe id a kapcsolat
    srcResults?: omap<string>//a resultfull srcsaveid childjainak a storeban resultFullDataArrayban mik a resultjai
    parentResultId?: string
    parentSrcId?: string
    selected?: boolean
}