import {For, Show} from "solid-js";
import {menuOptionsStatic} from "./MenuOptionsStatic";
import {layrUIStore, layrUIStoreUpdater} from "../LayrUIStore";

export default function MenuOptions() {

    document.body.addEventListener("click", ev => {

        if (layrUIStore.activeMenuButtonData.name === "") return

        layrUIStoreUpdater.updateStore((storeCopy, storeUpdatedResult) => {

            storeCopy.activeMenuButtonData.name = ""
            storeUpdatedResult(storeCopy)
        })

    })
    return (

        <Show when={layrUIStore.activeMenuButtonData.name}>
            <div class={"absolute flex-col w-fit  bg-gray-700 z-40 m-1 border-2 border-gray-900"}
                 style={{
                     left: layrUIStore.activeMenuButtonData.offsetLeft + "px",
                     top: layrUIStore.activeMenuButtonData.offsetHeight + "px"
                 }}>
                <For each={menuOptionsStatic}>
                    {(menuOption) => {
                        return (
                            <>
                                <Show when={menuOption.menuButton === layrUIStore.activeMenuButtonData.name}>
                                    <div class="text-gray-300 p-1 mrkHoverClick  select-none">
                                        {menuOption.menuOptionName}


                                    </div>
                                </Show>
                            </>
                        )
                    }}
                </For>

            </div>
        </Show>

    )
}