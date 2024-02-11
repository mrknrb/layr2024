import GroupElemUI from "./elemUIs/GroupElem/GroupElemUI";
import {layrCoreCommands} from "../../../../layrCore/LayrCoreCommands";
import {createSignal, Show} from "solid-js";
import MenuOptions from "../../../menu/MenuOptions";
import {ElemGroupDynamic} from "../../../../layrCore/elems/elemGroup/ElemGroupDynamic";
import {ElemGroupSave} from "../../../../layrCore/elems/elemGroup/ElemGroupSave";
import {ResultFull} from "../../../../layrCore/ResultData/ResultFull";
import BaseElemUI from "./elemUIs/BaseElem/BaseElemUI";

export default function PageView() {
    let [getRoot, setRoot] = createSignal<ResultFull<ElemGroupSave, ElemGroupDynamic>>()

    layrCoreCommands.getRootElem().then(value => {
        setRoot(value)

    })

    return (
        <div class="mrkScroll bg-green-800 ">
            <Show when={getRoot()}>
                <BaseElemUI resultFull={getRoot()}></BaseElemUI>
            </Show>


        </div>
    )
}
