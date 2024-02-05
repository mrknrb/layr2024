import {layrUIStoreUpdater} from "../LayrUIStore";
import {omf} from "../../lib/omf";
import {PanelEnums} from "../panels/PanelEnums";

export function viewSizeChange(panelEnum: PanelEnums, viewTopIndex: number, percentNumber: number) {

    layrUIStoreUpdater.updateStore((storeCopy, storeUpdatedResult) => {

        let panel = omf.get(storeCopy.panels, panelEnum)
        panel.viewsSize[viewTopIndex] = percentNumber
        storeUpdatedResult(storeCopy)
    })

}