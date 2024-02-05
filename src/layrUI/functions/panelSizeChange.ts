import {layrUIStoreUpdater} from "../LayrUIStore";
import {PanelEnums} from "../panels/PanelEnums";
import {omf} from "../../lib/omf";

export function panelSizeChange(percentNumber: number, panelEnum: PanelEnums) {

    layrUIStoreUpdater.updateStore((storeCopy, storeUpdatedResult) => {

        let panel = omf.get(storeCopy.panels, panelEnum)
        panel.panelSize = percentNumber
        storeUpdatedResult(storeCopy)
    })


}