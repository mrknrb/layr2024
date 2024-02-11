import {omap} from "../../../../lib/omap";
import {ElemFormatCategoryEnums} from "./elemUIs/ElemFormatCategoryEnums";
import {ElemFormatsEnums} from "./elemUIs/elemFormatsEnums";
import {omf} from "../../../../lib/omf";
import {ElemTypes} from "../../../../layrCore/elems/ElemTypes";
import {JSX} from "solid-js/jsx-runtime";
import GroupElemUI from "./elemUIs/GroupElem/GroupElemUI";

export const ElemUIsOmap: omap<JSX.FunctionElement, ElemTypes> = omf.setLot(omf.create(), [
    {
        key: ElemTypes.group,
        object: GroupElemUI
    }
])