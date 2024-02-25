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
import {ResultAllIdType} from "./ResultData/ResultAllIdType";

export type LayrCoreStoreType = {

    RootDocId: string,
    resultFullDataArray: ResultFull<any, any>[]
    selectedElems: ResultAllIdType[]
}

let LayrCoreStoreDefault: LayrCoreStoreType = {

    RootDocId: "",//lehet local file, lehet sima url es lehet indexeddb doc
    //Egy root frame van, az osszes tobbi egy olyan frame, ami be van csak toltve.
    resultFullDataArray: [],
    selectedElems: []

}


export const [layrCoreStore, layrCoreStoreSet] = createStore(LayrCoreStoreDefault)
//createEffect(() => {

//loadLocalElem(layrCoreStore.RootDocId)
//});

export let layrCoreStoreUpdater = new mrkSolidStoreUpdater(layrCoreStore, layrCoreStoreSet)

