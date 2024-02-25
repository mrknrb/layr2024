import {MenuOptionType} from "./menuOptionType";
import {For, Show} from "solid-js";
import {omf} from "../../lib/omf";
import {layrUIStore, layrUIStoreUpdater} from "../LayrUIStore";
import PanelButton from "../panels/PanelButton";
import {menuOptionsStatic} from "./MenuOptionsStatic";

export default function MenuButton(props: { menuText: string }) {


    return (


        <div class="mrkHoverClick bg-inherit  text-gray-300 font-bold select-none pt-1 pb-1 pl-2 pr-2"
             onClick={event => {
                 event.preventDefault()
                 event.stopPropagation()
                 layrUIStoreUpdater.updateStore((storeCopy, storeUpdatedResult) => {

                     storeCopy.activeMenuButtonData.name = props.menuText
                     // @ts-ignore
                     storeCopy.activeMenuButtonData.offsetLeft = event.target.offsetLeft
                     // @ts-ignore
                     storeCopy.activeMenuButtonData.offsetHeight = event.target.offsetHeight
                     storeUpdatedResult(storeCopy)
                 })

             }}>

            {props.menuText}
        </div>
    )
}
