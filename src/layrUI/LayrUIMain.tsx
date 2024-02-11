import Panel from "./panels/Panel"
import {PanelEnums} from "./panels/PanelEnums"
import MenuBar from "./menu/MenuBar"
import {layrQueryCommands} from "../layrQuery/layrQueryCommands"
import {testsAll} from "../tests/testsAll"
import Dexie from "dexie"
import {layrUIStore, layrUIStoreUpdater} from "./LayrUIStore";
import {layrCoreStore} from "../layrCore/LayrCoreStore";
import loki from 'lokijs';
import {findJsonPath} from "../layrCore/functions/findElemTree/findJsonPath";
import {layrCoreCommands} from "../layrCore/LayrCoreCommands";
import MenuOptions from "./menu/MenuOptions";
import {layrUIStoreCommands} from "./LayrUIStoreCommands";
import {getUrlDocId} from "./functions/getUrlDocId";
import {loadLocalRootElem} from "../layrCore/functions/local/loadLocalRootElem";
import {monacoInit} from "./general/monacoEditor/MonacoInit";
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
        window.layr.layrCoreStore = layrCoreStore
        // @ts-ignore
        window.layr.testsAll = testsAll
        // @ts-ignore
        window.layr.layrCoreCommands = layrCoreCommands
    }
    monacoInit()
    // @ts-ignore
    console.log(window.layr)
    /* setTimeout(() => {
        addEventListener("hashchange", (event) => {
            console.log(getUrlDocId())
            loadLocalRootElem(getUrlDocId())

        });
    }, 500)
   */
    setTimeout(() => {
        loadLocalRootElem(getUrlDocId())
    }, 500)
    document.addEventListener('contextmenu', event => event.preventDefault());
    return (
        //uj, grid stilus
        /*    <>  <MenuBar></MenuBar>
                <BackPanel></BackPanel>


            </>*/
        // eredeti
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
