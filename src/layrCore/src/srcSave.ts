import {QueryEnums} from "../../layrQuery/types/queryEnums";
import {QuerySchema} from "./querySchema";
import {omap} from "../../lib/omap";
import {crudEnums} from "../../layrQuery/types/crudEnums";
import {ResultTypes} from "../ResultData/ResultTypes";
import {srcActionDefaultNames} from "./srcActionDefaultNames";
import {SrcActionType} from "./SrcActionType";

export type SrcSave = {
    resultType: ResultTypes,
    srcActionList: SrcActionType[]
}

