import {ElemFormatsEnums} from "./elemFormatsEnums";
import {ElemFormatCategoryEnums} from "./ElemFormatCategoryEnums";
import {omap} from "../../../../../lib/omap";
import {omf} from "../../../../../lib/omf";

export function elemFormatStyleStringGenerator(elemFormatBundle: omap<omap<any, ElemFormatsEnums>, ElemFormatCategoryEnums>) {

    let styleString = ""
    omf.forEach(omf.get(elemFormatBundle, ElemFormatCategoryEnums.style), (elemFormat, key) => {
        styleString += elemFormat + ";"

    })
    return styleString


}