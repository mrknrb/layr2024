import {omf} from "../../lib/omf";
import {PanelsDefaultType} from "./panelsDefaultType";
import {PanelEnums} from "./PanelEnums";

export let PanelsDefaultValue = omf.setLot(omf.create<PanelsDefaultType, PanelEnums>(), [{
    key: PanelEnums.leftPanel,
    object: {
        panelSize: 30
        , viewsSize: [50, 30]
    }
}, {
    key: PanelEnums.rightPanel,
    object: {
        panelSize: 30
        , viewsSize: [50, 30]
    }
}])