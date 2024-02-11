import {ResultFull} from "../../../../../../layrCore/ResultData/ResultFull";
import {ElemGroupSave} from "../../../../../../layrCore/elems/elemGroup/ElemGroupSave";
import {ElemGroupDynamic} from "../../../../../../layrCore/elems/elemGroup/ElemGroupDynamic";
import {For, Show} from "solid-js";
import {menuOptionsStatic} from "../../../../../menu/MenuOptionsStatic";
import {layrUIStore} from "../../../../../LayrUIStore";
import {layrCoreStore} from "../../../../../../layrCore/LayrCoreStore";
import {omf} from "../../../../../../lib/omf";
import {elemUIFormatGeneratorAll} from "../../ElemUIFormatGeneratorAll";
import {elemFormatStyleStringGenerator} from "../elemFormatStyleStringGenerator";
import {elemFormatClassStringGenerator} from "../elemFormatClassStringGenerator";
import {ElemUIsOmap} from "../../elemUIsOmap";
import {ElemBaseSave} from "../../../../../../layrCore/elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../../../../../../layrCore/elems/elemBase/ElemBaseDynamic";
import {layrCoreCommands} from "../../../../../../layrCore/LayrCoreCommands";

export default function BaseElemUI(props: { resultFull: ResultFull<ElemBaseSave, ElemBaseDynamic> }) {

    let childResults = layrCoreStore.resultFullDataArray.filter(value => {
        return value.parentResultId === props.resultFull.resultId

    })
    let elemFormats
    let styleString = ""
    let classString = ""
    if (props.resultFull?.resultSave?.elemFormat) {
        elemFormats = elemUIFormatGeneratorAll(props.resultFull?.resultSave?.elemFormat)
        styleString = elemFormatStyleStringGenerator(elemFormats)
        classString = elemFormatClassStringGenerator(elemFormats)
    }

    console.log(styleString)
    return (
        <div class={" border-4 border-gray-900 absolute overflow-auto " + classString}
             style={"min-width:40px;min-height:40px;" + styleString} onClick={event => {
            event.stopPropagation()
            layrCoreCommands.setSelectedResultIds([props.resultFull.resultId])

        }}>


            {omf.get(ElemUIsOmap, props.resultFull.resultSave.elemType)(props)}


        </div>
    )
}
