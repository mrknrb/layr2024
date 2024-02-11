import {For, Show} from "solid-js"
import PanelButton from "./PanelButton"
import {PanelEnums} from "./PanelEnums"
import {omf} from "../../lib/omf"
import {ViewsOMap} from "../views/ViewsOMap"
import {layrUIStore} from "../LayrUIStore";

export default function Panel(props: { PanelType: PanelEnums }) {
    let panelClass = () => {
        if (props.PanelType === PanelEnums.leftPanel) {
            return "border-r-4  flex-row "
        } else if (props.PanelType === PanelEnums.rightPanel) {
            return "border-l-4 flex-row-reverse  "
        } else if (props.PanelType === PanelEnums.middlePanel) {
            return " flex-col  flex-grow"
        }
    }
    let panelSideClass = () => {
        if (props.PanelType === PanelEnums.leftPanel) {
            return "flex-col border-r-2"
        } else if (props.PanelType === PanelEnums.rightPanel) {
            return "flex-col border-l-2"
        } else if (props.PanelType === PanelEnums.middlePanel) {
            return "flex "
        }
    }

    return (
        <div class={"mrkDefault  border-gray-900 flex-shrink  " + panelClass()}
             style={"max-width:" + omf.get(layrUIStore.panels, props.PanelType)?.panelSize + "px"}>
            <div class={"relative  bg-gray-700 border-gray-900 " + panelSideClass()}>
                <For each={omf.toArray(layrUIStore.views).objectsKeys}>
                    {(view) => {
                        return (
                            <>
                                <Show when={view.object.panel === props.PanelType}>
                                    <PanelButton menuItem={view.key} PanelType={view.object.panel}></PanelButton>
                                </Show>
                            </>
                        )
                    }}
                </For>
            </div>

            <div class="mrkDefault bg-gray-700 flex-col  ">

                <For each={omf.toArray(layrUIStore.views).objectsKeys}>
                    {(view) => {
                        return (
                            <>

                                <Show when={view.object.panel === props.PanelType && view.object.visible}>

                                    <div
                                        class="mrkDefault border-b-4 border-gray-900"
                                    >{omf.get(ViewsOMap, view.key)}
                                    </div>

                                </Show>
                            </>
                        )
                    }}
                </For>
            </div>
        </div>
    )
}
