import {omap} from "../../../../lib/omap";
import {omf} from "../../../../lib/omf";
import {ElemFormatCategoryEnums} from "./elemUIs/ElemFormatCategoryEnums";
import {ElemFormatsData} from "./elemUIs/ElemFormatsData";
import {ElemFormat} from "./elemFormat";
import {ElemFormatsEnums} from "./elemUIs/elemFormatsEnums";
import {ElemTypes} from "../../../../layrCore/elems/ElemTypes";
import {ResultFull} from "../../../../layrCore/ResultData/ResultFull";
import {ElemBaseSave} from "../../../../layrCore/elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../../../../layrCore/elems/elemBase/ElemBaseDynamic";
import {srcUpdateRun} from "../../../../layrCore/src/srcUpdateRun";

export function elemUIFormatSaverAll(ResultFullChild: ResultFull<ElemBaseSave, ElemBaseDynamic>, elemFormats: { elemFormatData: string, elemFormatsEnums: ElemFormatsEnums }[]): void {

    let resultFull2: ResultFull<ElemBaseSave, ElemBaseDynamic> = JSON.parse(JSON.stringify(ResultFullChild))

    elemFormats.forEach((value, index) => {

        let saveValue = omf.get(ElemFormatsData, value.elemFormatsEnums).setFunction(value.elemFormatData)
        omf.set(resultFull2.resultSave.elemFormat, value.elemFormatsEnums, saveValue)


    })


    srcUpdateRun(ResultFullChild, resultFull2.resultSave)

}