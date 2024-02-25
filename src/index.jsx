/* @refresh reload */
import {render} from "solid-js/web"

import "./index.css"
import LayrUIMain from "./layrUI/LayrUIMain"
import {layrCoreStore, layrCoreStoreUpdater} from "./layrCore/LayrCoreStore";
import {testsAll} from "./tests/testsAll";
import Dexie from "dexie";
import {layrCoreCommands} from "./layrCore/LayrCoreCommands";
import {localIndexeddbInit} from "./layrCore/functions/local/localIndexeddbInit";
import {monacoInit} from "./layrUI/general/monacoEditor/MonacoInit";

async function startLayrApp() {
    await localIndexeddbInit()

    monacoInit()
    if (window) {
        // @ts-ignore
        window.layr = {}
        window.layr.layrCoreStore = layrCoreStore
        window.layr.layrCoreStoreCommands = layrCoreCommands
        window.layr.layrCoreStoreUpdater = layrCoreStoreUpdater
        window.layr.testsAll = testsAll

        // @ts-ignore
        window.Dexie = Dexie
    }


    render(() => <LayrUIMain/>, document.getElementById("root"))

}

startLayrApp()