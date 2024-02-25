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
import {layrCoreStore} from "../../../../layrCore/LayrCoreStore";

export async function elemUIFormatSaverAll(ResultFullChild: ResultFull<omap<ElemBaseSave>, omap<ElemBaseDynamic>>, elemId: string, elemFormats: { elemFormatData: string, elemFormatsEnums: ElemFormatsEnums }[]): Promise<void> {
    
    let resultFullModified: ResultFull<omap<ElemBaseSave>, omap<ElemBaseDynamic>> = JSON.parse(JSON.stringify(ResultFullChild))

    elemFormats.forEach((value, index) => {

        let saveValue = omf.get(ElemFormatsData, value.elemFormatsEnums).setFunction(value.elemFormatData)
        omf.set(omf.get(resultFullModified.resultSave, elemId).elemFormat, value.elemFormatsEnums, saveValue)


    })

    let resultFullParent = layrCoreStore.resultFullDataArray.find(value => {
        return value.resultId === ResultFullChild.parentResultId

    })
    if (!resultFullParent) return


    await srcUpdateRun(resultFullParent.resultId, ResultFullChild.parentElemId, ResultFullChild.parentSrcId, resultFullModified.resultSave)

}