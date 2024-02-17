import {ElemFormatsEnums} from "./elemFormatsEnums";
import {omap} from "../../../../../lib/omap";
import {omf} from "../../../../../lib/omf";
import {ElemFormat} from "../elemFormat";
import {ElemFormatCategoryEnums} from "./ElemFormatCategoryEnums";
import {ElemTypes} from "../../../../../layrCore/elems/ElemTypes";

export const ElemFormatsData: omap<{ setFunction: (args: string) => any, getFunction: (args: string) => any, formatCategory: ElemFormatCategoryEnums, onlySpecificElems?: omap<boolean, ElemTypes> }, ElemFormatsEnums> = omf.setLot(omf.create(), [
    {
        key: ElemFormatsEnums.top,
        object: {
            formatCategory: ElemFormatCategoryEnums.style,
            getFunction: (args: string) => {
                return "top:" + (Number(args) * 24).toString() + "px"


            }, setFunction: (args: string) => {


                return (Number(args) / 24).toString()


            }
        }
    }, {
        key: ElemFormatsEnums.left,
        object: {
            formatCategory: ElemFormatCategoryEnums.style,
            getFunction: (args: string) => {
                return "left:" + (Number(args) * 24).toString() + "px"


            }, setFunction: (args: string) => {


                return (Number(args) / 24).toString()


            }
        }
    }, {
        key: ElemFormatsEnums.width,
        object: {
            formatCategory: ElemFormatCategoryEnums.style,
            getFunction: (args: string) => {
                return "width:" + (Number(args) * 24).toString() + "px"


            }, setFunction: (args: string) => {


                return (Number(args) / 24).toString()


            }
        }
    }, {
        key: ElemFormatsEnums.height,
        object: {
            formatCategory: ElemFormatCategoryEnums.style,
            getFunction: (args: string) => {
                return "height:" + (Number(args) * 24).toString() + "px"


            }, setFunction: (args: string) => {


                return (Number(args) / 24).toString()


            }
        }
    }, {
        key: ElemFormatsEnums.bgColor,
        object: {
            formatCategory: ElemFormatCategoryEnums.style,
            getFunction: (args: string) => {
                return "background-color:" + args


            }
        }
    }, {
        key: ElemFormatsEnums.textSize,
        object: {
            onlySpecificElems: omf.setLot(omf.create(), [{key: ElemTypes.text, object: true}]),
            formatCategory: ElemFormatCategoryEnums.style,
            getFunction: (args: string) => {
                return "font-size:" + args


            }
        }
    }, {
        key: ElemFormatsEnums.fullScreen,
        object: {
            formatCategory: ElemFormatCategoryEnums.style,
            getFunction: (args: string) => {
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