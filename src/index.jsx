/* @refresh reload */
import {render} from "solid-js/web"

import "./index.css"
import LayrUIMain from "./layrUI/LayrUIMain"
import {layrCoreStore, layrCoreStoreUpdater} from "./layrCore/LayrCoreStore";
import {layrQueryCommands} from "./layrQuery/layrQueryCommands";
import {testsAll} from "./tests/testsAll";
import Dexie from "dexie";
import {layrCoreCommands} from "./layrCore/LayrCoreCommands";


if (window) {
    // @ts-ignore
    window.layr = {}
    window.layr.layrCoreStore = layrCoreStore
    window.layr.layrCoreStoreCommands = layrCoreCommands
    window.layr.layrCoreStoreUpdater = layrCoreStoreUpdater
    window.layr.layrQueryCommands = layrQueryCommands
    window.layr.testsAll = testsAll

    // @ts-ignore
    window.Dexie = Dexie
}
render(() => <LayrUIMain/>, document.getElementById("root"))
