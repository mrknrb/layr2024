import {ResultFull} from "../../../../../../layrCore/ResultData/ResultFull";
import {ElemGroupSave} from "../../../../../../layrCore/elems/elemGroup/ElemGroupSave";
import {ElemGroupDynamic} from "../../../../../../layrCore/elems/elemGroup/ElemGroupDynamic";
import {createEffect, createSignal, For, onMount, Show} from "solid-js";
import {menuOptionsStatic} from "../../../../../menu/MenuOptionsStatic";
import {layrUIStore} from "../../../../../LayrUIStore";
import {layrCoreStore} from "../../../../../../layrCore/LayrCoreStore";
import {omf} from "../../../../../../lib/omf";
import {elemUIFormatGeneratorAll} from "../../ElemUIFormatGeneratorAll";
import {elemFormatStyleStringGenerator} from "../elemFormatStyleStringGenerator";
import {elemFormatClassStringGenerator} from "../elemFormatClassStringGenerator";
import BaseElemUI from "../BaseElem/BaseElemUI";
import {MrkLib} from "../../../../../../lib/MrkLib";
import {ElemFormatCategoryEnums} from "../ElemFormatCategoryEnums";
import {omap} from "../../../../../../lib/omap";
import {ElemBaseSave} from "../../../../../../layrCore/elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../../../../../../layrCore/elems/elemBase/ElemBaseDynamic";
import {DefaultPointerEnums} from "../../../../../../layrCore/functions/generic/DefaultPointerEnums";
import PageMapListElem from "../../../pageMapView/PageMapListElem";

export default function GroupElemUI(props: { resultFull: ResultFull<omap<ElemBaseSave>, omap<ElemBaseDynamic>>, elemId: string }) {

    let elem = omf.get(props.resultFull.resultSave, props.elemId)
    let [integratedMapGet, integratedMapSet] = createSignal()
    createEffect(v => {
        if (elem.elemFormat) {
            let elemFormats = elemUIFormatGeneratorAll(elem.elemFormat)

            integratedMapSet(omf.get(elemFormats, ElemFormatCategoryEnums.integrated))

        }
    })


    let touchScrollDiv
    onMount(() => {
        MrkLib.grabInit(touchScrollDiv)


    })


    let [resultFullChildGet, resultFullChildSet] = createSignal<ResultFull<omap<ElemBaseSave>, omap<ElemBaseDynamic>>>()
    createEffect(v => {

        layrCoreStore
        if (elem.srcPointers) {
            let resultFullData = layrCoreStore.resultFullDataArray.find(value => {
                return value.parentResultId === props.resultFull.resultId && value.parentElemId === props.elemId && value.parentSrcId === omf.get(elem.srcPointers, DefaultPointerEnums.elems)
            })
            // console.log("resultFullData", resultFullData)
            //  console.log("elem:", elem)
            //  console.log("--------------------------------------------------")
            if (resultFullData) resultFullChildSet(resultFullData)

        }
    })


    return (
        <div class={" GroupElemUI  relative  overflow-auto "}
             style={"min-width:40px;min-height:40px;height:100%;width:100%;   background: repeating-linear-gradient(135deg, transparent , #2b2b2b 12px, transparent 24px) local,repeating-linear-gradient(45deg, #2d2d2d , #2b2b2b 12px, #2d2d2d 24px) local;"}
             ref={touchScrollDiv}
             onLoad={event => {
                 //  MrkLib.grabInit(event.target.outerHTML)

             }}>
            <Show when={resultFullChildGet()}>
                <For each={omf.toArray(resultFullChildGet().resultSave).objectsKeys}>
                    {(objectKeys) => {
                        return (
                            <>
                                <BaseElemUI resultFull={resultFullChildGet()} elemId={objectKeys.key}></BaseElemUI>
                            </>
                        )
                    }}
                </For>
            </Show>


        </div>
    )
}
