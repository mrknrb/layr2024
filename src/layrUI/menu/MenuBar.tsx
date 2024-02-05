import {For, Show} from "solid-js";
import {omf} from "../../lib/omf";
import {layrUIStore} from "../LayrUIStore";
import PanelButton from "../panels/PanelButton";
import {menuOptionsStatic} from "./MenuOptionsStatic";
import {PanelEnums} from "../panels/PanelEnums";
import {MenuButtonEnum} from "./MenuButtonEnum";
import MenuButton from "./MenuButton";

export default function MenuBar() {


    return (
        <>
            <div class=" relative   bg-gray-700   border-b-4  border-gray-900 flex pl-4 ">

                <For each={Object.values(MenuButtonEnum)}>
                    {(menuButtonName) => {
                        return (
                            <MenuButton menuText={menuButtonName}/>

                        )
                    }}
                </For>


            </div>
        </>
    )
}
