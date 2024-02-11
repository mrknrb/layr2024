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

export default function PageMapView() {
    let root = layrCoreCommands.getRootElem()


    return (
        <div class="relative mrkScroll  flex-col">
            <VerticalBar MenuElems={[]} settings={{}}></VerticalBar>


            <div class="mrkScroll  ">
                <Show when={root}>
                    <PageMapListElem groupElemFull={root}></PageMapListElem>

                </Show>


            </div>
        </div>
    )
}
