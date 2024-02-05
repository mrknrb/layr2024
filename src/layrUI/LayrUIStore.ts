import {createStore} from "solid-js/store";
import {PanelsDefaultType} from "./panels/panelsDefaultType";
import {PanelEnums} from "./panels/PanelEnums";
import {ViewsDefaultType} from "./views/viewsDefaultType";
import {ViewEnums} from "./views/ViewEnums";
import {mrkSolidStoreUpdater} from "../lib/mrkSolidStoreUpdater";
import {omap} from "../lib/omap";
import {viewsDefaultValue} from "./views/viewsDefaultValue";
import {PanelsDefaultValue} from "./panels/panelsDefaultValue";


export type LayrUIStoreType = {

    panels: omap<PanelsDefaultType, PanelEnums>
    views: omap<ViewsDefaultType, ViewEnums>
    activeMenuButtonData: { name: string, offsetLeft: number, offsetHeight: number }

}

let LayrUIStoreDefault: LayrUIStoreType = {

    views: viewsDefaultValue,
    panels: PanelsDefaultValue,
    activeMenuButtonData: {name: "", offsetLeft: 0, offsetHeight: 0}
}


export const [layrUIStore, layrUIStoreSet] = createStore(LayrUIStoreDefault)


export let layrUIStoreUpdater = new mrkSolidStoreUpdater(layrUIStore, layrUIStoreSet)
