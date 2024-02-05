import {omf} from "../../lib/omf";
import {ViewEnums} from "./ViewEnums";
import {PanelEnums} from "../panels/PanelEnums";
import {ViewsDefaultType} from "./viewsDefaultType";

export let viewsDefaultValue = omf.setLot(omf.create<ViewsDefaultType, ViewEnums>(), [{
    key: ViewEnums.PageView,
    object: {
        panel: PanelEnums.middlePanel,
        visible: true

    }
}, {
    key: ViewEnums.LocalDocsView,
    object: {
        panel: PanelEnums.leftPanel,
        visible: true

    }
}, {
    key: ViewEnums.PropertiesView,
    object: {
        panel: PanelEnums.rightPanel,
        visible: true

    }
}, {
    key: ViewEnums.SettingsView,
    object: {
        panel: PanelEnums.rightPanel,
        visible: true

    }
}, {
    key: ViewEnums.PageMapView,
    object: {
        panel: PanelEnums.leftPanel,
        visible: true

    }
}])