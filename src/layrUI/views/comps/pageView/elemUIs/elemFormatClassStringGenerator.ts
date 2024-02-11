import {ElemFormatsEnums} from "./elemFormatsEnums";
import {ElemFormatCategoryEnums} from "./ElemFormatCategoryEnums";
import {omap} from "../../../../../lib/omap";
import {omf} from "../../../../../lib/omf";

export function elemFormatClassStringGenerator(elemFormatBundle: omap<omap<any, ElemFormatsEnums>, ElemFormatCategoryEnums>) {

    let classString = ""
    omf.forEach(omf.get(elemFormatBundle, ElemFormatCategoryEnums.style), (elemFormat, key) => {
        classString += elemFormat + " "

    })
    return classString


}