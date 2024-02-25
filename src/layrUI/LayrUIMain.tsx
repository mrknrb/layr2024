import Panel from "./panels/Panel"
import {PanelEnums} from "./panels/PanelEnums"
import MenuBar from "./menu/MenuBar"
import {testsAll} from "../tests/testsAll"
import {layrUIStore, layrUIStoreUpdater} from "./LayrUIStore";
import MenuOptions from "./menu/MenuOptions";
import {layrUIStoreCommands} from "./LayrUIStoreCommands";
import {getUrlDocId} from "./functions/getUrlDocId";
import {loadLocalRootElem} from "../layrCore/functions/local/loadLocalRootElem";
import {onMount} from "solid-js";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function LayrUIMain() {

    // @ts-ignore
    if (window && window.layr) {
        // @ts-ignore
        window.layr.layrUIStore = layrUIStore
        // @ts-ignore
        window.layr.layrUIStoreCommands = layrUIStoreCommands
        // @ts-ignore
        window.layr.layrUIStoreUpdater = layrUIStoreUpdater
        // @ts-ignore
        window.layr.testsAll = testsAll
    }
    onMount(() => {
        loadLocalRootElem(getUrlDocId())

    })

    document.addEventListener('contextmenu', event => event.preventDefault());
    return (

        <>

            <MenuBar></MenuBar> <MenuOptions></MenuOptions>
            <div class="mrkDefault flex-row  bg-gray-400 ">
                <Panel PanelType={PanelEnums.leftPanel}/>
                <Panel PanelType={PanelEnums.middlePanel}/>
                <Panel PanelType={PanelEnums.rightPanel}/>
            </div>


        </>
    )
}
