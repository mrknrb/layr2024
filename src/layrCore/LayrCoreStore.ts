import {createStore} from "solid-js/store";
import {ElemGroupDynamic} from "./elems/elemGroup/ElemGroupDynamic";
import {mrkSolidStoreUpdater} from "../lib/mrkSolidStoreUpdater";
import {omf} from "../lib/omf";
import {omap} from "../lib/omap";
import {ResultFull} from "./ResultData/ResultFull";
import {ElemBaseSave} from "./elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "./elems/elemBase/ElemBaseDynamic";
import {localIndexeddbInit} from "./functions/local/localIndexeddbInit";
import {loadLocalRootElem} from "./functions/local/loadLocalRootElem";
import {createEffect} from "solid-js";

export type LayrStoreType = {

    RootDocId: string,
    resultFullDataArray: ResultFull<any, any>[]
    selectedResultIds: string[]
}

let LayrStoreDefault: LayrStoreType = {

    RootDocId: "",//lehet local file, lehet sima url es lehet indexeddb doc
    //Egy root frame van, az osszes tobbi egy olyan frame, ami be van csak toltve.
    resultFullDataArray: [],
    selectedResultIds: []
}


export const [layrCoreStore, layrCoreStoreSet] = createStore(LayrStoreDefault)
//createEffect(() => {

//loadLocalElem(layrCoreStore.RootDocId)
//});

export let layrCoreStoreUpdater = new mrkSolidStoreUpdater(layrCoreStore, layrCoreStoreSet)
localIndexeddbInit()
