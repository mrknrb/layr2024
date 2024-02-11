import {ElemFormatsEnums} from "./elemFormatsEnums";
import {omap} from "../../../../../lib/omap";
import {omf} from "../../../../../lib/omf";
import {ElemFormat} from "../elemFormat";
import {ElemFormatCategoryEnums} from "./ElemFormatCategoryEnums";
import {ElemTypes} from "../../../../../layrCore/elems/ElemTypes";

export const ElemFormatsData: omap<{ function: (args: string) => any, formatCategory: ElemFormatCategoryEnums, onlySpecificElems?: omap<boolean, ElemTypes> }, ElemFormatsEnums> = omf.setLot(omf.create(), [
    {
        key: ElemFormatsEnums.top,
        object: {
            formatCategory: ElemFormatCategoryEnums.style,
            function: (args: string) => {
                return "top:" + args + "px"


            }
        }
    }, {
        key: ElemFormatsEnums.left,
        object: {
            formatCategory: ElemFormatCategoryEnums.style,
            function: (args: string) => {
                return "left:" + args + "px"


            }
        }
    }, {
        key: ElemFormatsEnums.width,
        object: {
            formatCategory: ElemFormatCategoryEnums.style,
            function: (args: string) => {
                return "width:" + args + "px"


            }
        }
    }, {
        key: ElemFormatsEnums.height,
        object: {
            formatCategory: ElemFormatCategoryEnums.style,
            function: (args: string) => {
                return "height:" + args + "px"


            }
        }
    }, {
        key: ElemFormatsEnums.bgColor,
        object: {
            formatCategory: ElemFormatCategoryEnums.style,
            function: (args: string) => {
                return "background-color:" + args


            }
        }
    }, {
        key: ElemFormatsEnums.textSize,
        object: {
            onlySpecificElems: omf.setLot(omf.create(), [{key: ElemTypes.text, object: true}]),
            formatCategory: ElemFormatCategoryEnums.style,
            function: (args: string) => {
                return "font-size:" + args


            }
        }
    }, {
        key: ElemFormatsEnums.fullScreen,
        object: {
            formatCategory: ElemFormatCategoryEnums.style,
            function: (args: string) => {
                return ` position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: block`


            }
        }
    }

])