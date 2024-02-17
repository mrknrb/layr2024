import {ResultFull} from "../../../../../../layrCore/ResultData/ResultFull";
import {JSX, onMount} from "solid-js";
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
    let dragRef: JSX.HTMLAttributes<HTMLDivElement>
    let mainRef: JSX.HTMLAttributes<HTMLDivElement>

    let resizeRef: JSX.HTMLAttributes<HTMLDivElement>

    let dragEvent: TypedEvent<any>
    let resizeEvent: TypedEvent<any>
    onMount(() => {

        dragEvent = MrkLib.dragElement(dragRef, mainRef, false, 24)

        dragEvent.on(event => {

            elemUIFormatSaverAll(props.resultFull, [{
                elemFormatData: mainRef.offsetTop.toString(),
                elemFormatsEnums: ElemFormatsEnums.top
            }, {elemFormatData: mainRef.offsetLeft.toString(), elemFormatsEnums: ElemFormatsEnums.left}])

        })
        let resizeEvent = MrkLib.resizeElementCornerHtml(mainRef, resizeRef, 24)
        resizeEvent.on(event => {
            elemUIFormatSaverAll(props.resultFull, [{
                elemFormatData: mainRef.offsetHeight.toString(),
                elemFormatsEnums: ElemFormatsEnums.height
            }, {elemFormatData: mainRef.offsetWidth.toString(), elemFormatsEnums: ElemFormatsEnums.width}])


        })

    })

    console.log(styleString)

    return (
        <>

            <div ref={mainRef} class={" outline-4 outline-gray-900 absolute overflow:visible " + classString}
                 style={"min-width:40px;min-height:40px;outline:solid;" + styleString} onClick={event => {
                event.stopPropagation()
                layrCoreCommands.setSelectedResultIds([props.resultFull.resultId])

            }}>
                <svg class="absolute z-50" style="top:0px;width:24px; height:24px;">

                    <polygon class="absolute z-50" points="0 24 24 0 0 0" fill="darkorange"
                             stroke="darkorange"
                             stroke-width="2" ref={dragRef}/>

                </svg>


                {omf.get(ElemUIsOmap, props.resultFull.resultSave.elemType)(props)}
                <svg class="absolute z-50" style="bottom:0px;width:24px; height:24px;right:0px">

                    <polygon class="absolute z-50" points="24 0 24 24 0 24" fill="blue"
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