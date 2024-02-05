import {omf} from "../../lib/omf"
import {ViewEnums} from "./ViewEnums"
import PageView from "./comps/pageView/PageView";
import {JSX} from "solid-js";
import LocalDocsView from "./comps/localDocsView/LocalDocsView";
import PropertiesView from "./comps/propertiesView/PropertiesView";
import PageMapView from "./comps/pageMapView/PageMapView";

export let ViewsOMap = omf.create<JSX.Element, ViewEnums>({
    [ViewEnums.PageView]: PageView,
    [ViewEnums.PropertiesView]: PropertiesView,
    [ViewEnums.SettingsView]: "",
    [ViewEnums.LocalDocsView]: LocalDocsView,
    [ViewEnums.PageMapView]: PageMapView,
})
