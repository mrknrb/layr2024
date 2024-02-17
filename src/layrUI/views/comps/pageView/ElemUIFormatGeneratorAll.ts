import {omap} from "../../../../lib/omap";
import {omf} from "../../../../lib/omf";
import {ElemFormatCategoryEnums} from "./elemUIs/ElemFormatCategoryEnums";
import {ElemFormatsData} from "./elemUIs/ElemFormatsData";
import {ElemFormat} from "./elemFormat";
import {ElemFormatsEnums} from "./elemUIs/elemFormatsEnums";
import {ElemTypes} from "../../../../layrCore/elems/ElemTypes";

export function elemUIFormatGeneratorAll(elemFormats: omap<string>, elemType?: ElemTypes): omap<omap<any, ElemFormatsEnums>, ElemFormatCategoryEnums> {

    let elemFormatBundle = omf.create<omap<any, ElemFormatsEnums>, ElemFormatCategoryEnums>()
    for (let elemFormatEnumsKey in ElemFormatCategoryEnums) {
        omf.set(elemFormatBundle, elemFormatEnumsKey, {})
    }


    omf.forEach(elemFormats, (object, key) => {

        let data = omf.get(ElemFormatsData, key)
        if (!data.onlySpecificElems && elemType === undefined || data.onlySpecificElems && elemType && omf.get(data.onlySpecificElems, elemType)) {


            omf.set(omf.get(elemFormatBundle, data.formatCategory), key, data.getFunction(object))
        }
        //omf.get(elemFormatBundle, data.ElemFormatCategoryEnums)[key] = data.elemFormatData

    })

    return elemFormatBundle

}