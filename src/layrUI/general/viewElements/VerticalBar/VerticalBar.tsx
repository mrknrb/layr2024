import {For} from "solid-js";
import {MenuButtonEnum} from "../../../menu/MenuButtonEnum";
import MenuButton from "../../../menu/MenuButton";
import {VerticalBar_MenuElemData} from "./VerticalBar_MenuElemData";
import {VsRefresh} from "solid-icons/vs";
import {FaSolidPlus} from "solid-icons/fa";
import VerticalBarMenuElemButton from "./VerticalBarMenuElemButton";
import {VerticalBarElemOMap} from "./VerticalBarElemOMap";
import {omf} from "../../../../lib/omf";
import {VerticalBar_MenuElemTypes} from "./VerticalBar_MenuElemTypes";

export default function VerticalBar(props: { settings: {}, MenuElems: VerticalBar_MenuElemData[] }) {


    return (
        <>


            <div class=" relative   bg-gray-700   border-b-4  border-gray-900 flex pl-4 h7">

                <For each={props.MenuElems}>
                    {(menuelem) => {
                        return (
                            <>
                                {omf.get(VerticalBarElemOMap, menuelem.menuElemType)({data: menuelem})}

                            </>

                        )
                    }}
                </For>


            </div>
        </>
    )
}
