import {elemDataSourceLink} from "../../src/elemDataSourceLink";
import {ElemTypes} from "../ElemTypes";
import {omap} from "../../../lib/omap";
import {QuerySchema} from "../../src/querySchema";
import {crudEnums} from "../../../layrQuery/types/crudEnums";
import {SrcSave} from "../../src/srcSave";
import {DefaultPointerEnums} from "../../functions/generic/DefaultPointerEnums";

export interface ElemBaseSave {
    // elemSaveId: igy lehet majd ra hivatkozni az elempathal. az omapban ott van
    elemType?: ElemTypes
    srcPointers?: omap<string, string | DefaultPointerEnums>//minden elemtypenak lehet tobb srcje, pl a groupnak a child elemsframes es a list data src
    srcSaveList?: omap<SrcSave>//srcSaveID

    elemFormat?: omap<string, string>
}