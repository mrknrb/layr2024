import GroupElemUI from "./GroupElemUI";
import {layrCoreCommands} from "../../../../layrCore/LayrCoreCommands";
import {Show} from "solid-js";

export default function PageView() {
    let root = layrCoreCommands.getRootElem()

    return (
        <div class="mrkScroll bg-green-800 ">
            <Show when={root}>
                <GroupElemUI groupElemFull={root}></GroupElemUI>
            </Show>


        </div>
    )
}
