import {ViewEnums} from "../views/ViewEnums"
import {PanelEnums} from "./PanelEnums"
import {layrUIStore, layrUIStoreUpdater} from "../LayrUIStore";
import {omf} from "../../lib/omf";

export default function PanelButton(props: { menuItem: ViewEnums, PanelType: PanelEnums }) {

    let rotatedCss = () => {
        if (props.PanelType === PanelEnums.leftPanel) {
            return ' writing-mode: tb-rl;	transform: rotate(-180deg); '
        } else if (props.PanelType === PanelEnums.rightPanel) {
            return ' writing-mode: tb-rl;'
        } else if (props.PanelType === PanelEnums.middlePanel) {
            return ' '
        }
    };
    let visibleBG = () => {
        if (omf.get(layrUIStore.views, props.menuItem).visible) {
            return ' bg-gray-800 '
        } else {
            return ' bg-gray-700'
        }
    };
    return (


        <div style={rotatedCss()} class={"text-gray-300 mrkHoverClick font-bold select-none  p-1" + visibleBG()}
             onclick={() => {
                 layrUIStoreUpdater.updateStore((storeCopy, storeUpdatedResult) => {
                     omf.get(storeCopy.views, props.menuItem).visible = !omf.get(storeCopy.views, props.menuItem).visible

                     storeUpdatedResult(storeCopy)
                 })

             }}>
            {props.menuItem}
        </div>

    )
}
