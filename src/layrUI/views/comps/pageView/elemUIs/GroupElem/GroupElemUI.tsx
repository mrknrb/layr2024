import {ResultFull} from "../../../../../../layrCore/ResultData/ResultFull";
import {ElemGroupSave} from "../../../../../../layrCore/elems/elemGroup/ElemGroupSave";
import {ElemGroupDynamic} from "../../../../../../layrCore/elems/elemGroup/ElemGroupDynamic";
import {For, onMount, Show} from "solid-js";
import {menuOptionsStatic} from "../../../../../menu/MenuOptionsStatic";
import {layrUIStore} from "../../../../../LayrUIStore";
import {layrCoreStore} from "../../../../../../layrCore/LayrCoreStore";
import {omf} from "../../../../../../lib/omf";
import {elemUIFormatGeneratorAll} from "../../ElemUIFormatGeneratorAll";
import {elemFormatStyleStringGenerator} from "../elemFormatStyleStringGenerator";
import {elemFormatClassStringGenerator} from "../elemFormatClassStringGenerator";
import BaseElemUI from "../BaseElem/BaseElemUI";
import {MrkLib} from "../../../../../../lib/MrkLib";

export default function GroupElemUI(props: { resultFull: ResultFull<ElemGroupSave, ElemGroupDynamic> }) {

    let childResults = layrCoreStore.resultFullDataArray.filter(value => {
        return value.parentResultId === props.resultFull.resultId

    })
    let elemFormats
    let styleString = ""
    let classString = ""
    if (props.resultFull?.resultSave?.elemFormat) {
        elemFormats = elemUIFormatGeneratorAll(props.resultFull?.resultSave?.elemFormat, props.resultFull?.resultSave?.elemType)
        styleString = elemFormatStyleStringGenerator(elemFormats)
        classString = elemFormatClassStringGenerator(elemFormats)
    }

    let touchScrollDiv
    onMount(() => {
        MrkLib.grabInit(touchScrollDiv)


    })


    return (
        <div class={"   relative  overflow-auto " + classString}
             style={"min-width:40px;min-height:40px;height:100%;width:100%;   background: repeating-linear-gradient(135deg, transparent , #2d2d2d 20px, transparent 40px) local,repeating-linear-gradient(45deg, #3d3d3d , #2d2d2d 20px, #3d3d3d 40px) local;" + styleString}
             ref={touchScrollDiv}
             onLoad={event => {
                 //  MrkLib.grabInit(event.target.outerHTML)

             }}>

            <For each={childResults}>
                {(ElemResultData) => {
                    return (
                        <>
                            <BaseElemUI resultFull={ElemResultData}></BaseElemUI>
                        </>
                    )
                }}
            </For>

        </div>
    )
}
