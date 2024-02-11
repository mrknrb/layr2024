import {VerticalBar_MenuElemData} from "./VerticalBar_MenuElemData";
import {For} from "solid-js";
import {VerticalBar_MenuElemTypes} from "./VerticalBar_MenuElemTypes";
import {MrkLib} from "../../../../lib/MrkLib";

export default function VerticalBarMenuElemButton(props: { data: VerticalBar_MenuElemData }) {

    return (
        <>

            <div class="bg-inherit  mrkHoverClick select-none p-1"
                 onclick={props.data?.menuElemFunction}>{props.data?.menuElemIcon}</div>

        </>
    )
}
