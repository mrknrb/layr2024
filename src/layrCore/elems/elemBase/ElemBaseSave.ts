import {elemDataSourceLink} from "../../queryBundle/elemDataSourceLink";
import {ElemTypes} from "../ElemTypes";
import {omap} from "../../../lib/omap";
import {QuerySchema} from "../../queryBundle/querySchema";
import {crudEnums} from "../../../layrQuery/types/crudEnums";
import {SrcSave} from "../../queryBundle/srcSave";

export interface ElemBaseSave {
    // elemSaveId: igy lehet majd ra hivatkozni az elempathal. az omapban ott van
    elemType?: ElemTypes
    srcPointers?: omap<string>//minden elemtypenak lehet tobb srcje, pl a groupnak a child elemsframes es a list data src
    srcSaveList?: omap<SrcSave>//srcSaveID
    list?: boolean
    elemFormat?: { autoInvisible?: boolean, top?: number, left?: number, width?: number, height?: number }
}