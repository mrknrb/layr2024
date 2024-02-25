import {ResultFull} from "../../../../../../layrCore/ResultData/ResultFull";
import {createEffect, createSignal, JSX, onMount, Show} from "solid-js";
import {layrCoreStore} from "../../../../../../layrCore/LayrCoreStore";
import {omf} from "../../../../../../lib/omf";
import {elemUIFormatGeneratorAll} from "../../ElemUIFormatGeneratorAll";
import {elemFormatStyleStringGenerator} from "../elemFormatStyleStringGenerator";
import {elemFormatClassStringGenerator} from "../elemFormatClassStringGenerator";
import {ElemUIsOmap} from "../../elemUIsOmap";
import {ElemBaseSave} from "../../../../../../layrCore/elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../../../../../../layrCore/elems/elemBase/ElemBaseDynamic";
import {layrCoreCommands} from "../../../../../../layrCore/LayrCoreCommands";
import {MrkLib} from "../../../../../../lib/MrkLib";
import {TypedEvent} from "../../../../../../lib/TypedEvents";
import {srcUpdateRun} from "../../../../../../layrCore/src/srcUpdateRun";
import {ElemFormatsEnums} from "../elemFormatsEnums";
import {ElemFormatsData} from "../ElemFormatsData";
import {elemUIFormatSaverAll} from "../../ElemUIFormatSaveAll";
import TreeBrowser from "../../../../../general/viewElements/TreeBrowser/TreeBrowser";
import {omap} from "../../../../../../lib/omap";
import {setSelectedIds} from "../../../../../../layrCore/functions/setSelectedIds";

export default function BaseElemUI(props: { resultFull: ResultFull<omap<ElemBaseSave>, omap<ElemBaseDynamic>>, elemId: string }) {
    let elem = omf.get(props.resultFull.resultSave, props.elemId)

    let [styleStringGet, styleStringSet] = createSignal()
    let [classStringGet, classStringSet] = createSignal()
    createEffect(v => {
        if (elem.elemFormat) {
            let elemFormats = elemUIFormatGeneratorAll(elem.elemFormat)

            styleStringSet(elemFormatStyleStringGenerator(elemFormats))
            classStringSet(elemFormatClassStringGenerator(elemFormats))

        }
    })

    let dragRef: JSX.HTMLAttributes<HTMLDivElement>
    let mainRef: JSX.HTMLAttributes<HTMLDivElement>

    let resizeRef: JSX.HTMLAttributes<HTMLDivElement>

    let dragEvent: TypedEvent<any> = new TypedEvent<any>()
    let resizeEvent: TypedEvent<any> = new TypedEvent<any>()
    let hiddenElementsNotSelected = () => {

        let a = layrCoreStore.selectedElems.find(value => {
            return value.elemId === props.elemId && value.resultId === props.resultFull.resultId

        })


        if (!a) {
            return "hidden"

        } else {
            return ""

        }
    }

    onMount(() => {

        dragEvent = MrkLib.dragElement(dragRef, mainRef, false, 24)

        dragEvent.on(event => {

            elemUIFormatSaverAll(props.resultFull, props.elemId, [{
                elemFormatData: mainRef.offsetTop.toString(),
                elemFormatsEnums: ElemFormatsEnums.top
            }, {
                elemFormatData: mainRef.offsetLeft.toString(),
                elemFormatsEnums: ElemFormatsEnums.left
            }])

        })
        let resizeEvent = MrkLib.resizeElementCornerHtml(mainRef, resizeRef, 24)
        resizeEvent.on(event => {
            elemUIFormatSaverAll(props.resultFull, props.elemId, [{
                elemFormatData: mainRef.offsetHeight.toString(),
                elemFormatsEnums: ElemFormatsEnums.height
            }, {
                elemFormatData: mainRef.offsetWidth.toString(),
                elemFormatsEnums: ElemFormatsEnums.width
            }])


        })

    })


    return (
        <>

            <div ref={mainRef}
                 class={"BaseElemUI outline-4 outline-gray-900 absolute overflow:visible " + classStringGet()}
                 style={"min-width:40px;min-height:40px;outline:solid;" + styleStringGet()}
                 onClick={event => {

                     event.stopPropagation()
                     setSelectedIds([{
                         resultId: props.resultFull.resultId,
                         elemId: props.elemId
                     }])
                 }}
            >
                {omf.get(ElemUIsOmap, elem.elemType)(props)}


                <svg class={"absolute z-50 " + hiddenElementsNotSelected()} style="top:0px;width:24px; height:24px;">

                    <polygon class="absolute z-50" points="0 24 24 0 0 0" fill="darkorange"
                             stroke="darkorange"
                             stroke-width="2" ref={dragRef}/>

                </svg>


                <svg class={"absolute z-50 " + hiddenElementsNotSelected()}
                     style="bottom:0px;width:24px; height:24px;right:0px">

                    <polygon class="absolute z-50 " points="24 0 24 24 0 24" fill="blue"
                             stroke="blue"
                             stroke-width="2" ref={resizeRef}/>

                </svg>

            </div>
        </>
    )
}
//<div className="absolute bg-amber-700  z-50 flex-row"
//   style="top:0px;width:24px;outline:solid; height:24px" ref={dragRef}>


//</div>