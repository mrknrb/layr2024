import {layrCoreCommands} from "../../../../layrCore/LayrCoreCommands";
import {createSignal, For, Show} from "solid-js";
import {setUrlDocId} from "../../../functions/setUrlDocId";
import {VsRefresh} from 'solid-icons/vs'
import {FaSolidPlus} from 'solid-icons/fa'
import VerticalBar from "../../../general/viewElements/VerticalBar/VerticalBar";
import {
    VerticalBar_MenuElemData
} from "../../../general/viewElements/VerticalBar/VerticalBar_MenuElemData";
import GroupElemUI from "../pageView/elemUIs/GroupElem/GroupElemUI";
import PageMapListElem from "./PageMapListElem";
import {getRootElem} from "../../../../layrCore/ResultData/getRootElem";

export default function PageMapView() {
    let root = getRootElem()


    return (
        <div class="relative mrkScroll  flex-col">
            <VerticalBar MenuElems={[]} settings={{}}></VerticalBar>


            <div class=" relative ">
                <Show when={root}>
                    <PageMapListElem groupElemFull={root}></PageMapListElem>

                </Show>


            </div>
        </div>
    )
}
