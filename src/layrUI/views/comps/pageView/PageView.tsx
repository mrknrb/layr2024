import GroupElemUI from "./elemUIs/GroupElem/GroupElemUI";
import {layrCoreCommands} from "../../../../layrCore/LayrCoreCommands";
import {createSignal, Show} from "solid-js";
import MenuOptions from "../../../menu/MenuOptions";
import {ElemGroupDynamic} from "../../../../layrCore/elems/elemGroup/ElemGroupDynamic";
import {ElemGroupSave} from "../../../../layrCore/elems/elemGroup/ElemGroupSave";
import {ResultFull} from "../../../../layrCore/ResultData/ResultFull";
import BaseElemUI from "./elemUIs/BaseElem/BaseElemUI";
import {getRootElem} from "../../../../layrCore/ResultData/getRootElem";

export default function PageView() {


    return (
        <div class="mrkScroll bg-green-800 ">
            <Show when={getRootElem()}>
                <BaseElemUI resultFull={getRootElem()} elemId="root"></BaseElemUI>
            </Show>


        </div>
    )
}
