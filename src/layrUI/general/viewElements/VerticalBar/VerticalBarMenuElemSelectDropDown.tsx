import {VerticalBar_MenuElemData} from "./VerticalBar_MenuElemData";
import {For} from "solid-js";
import {VerticalBar_MenuElemTypes} from "./VerticalBar_MenuElemTypes";
import VerticalBarMenuElemButton from "./VerticalBarMenuElemButton";

export default function VerticalBarMenuElemSelectDropDown(props: { data: VerticalBar_MenuElemData }) {


    return (
        <>
            <select class="bg-inherit  mrkHoverClick select-none p-1" onChange={event => {

                props.data.menuElemOptions[event.target.value].optionFunction()

            }}>
                <For each={props.data.menuElemOptions}>
                    {(option, index) => {
                        return (
                            <option value={index()} onclick={props.data.menuElemFunction}>{option.optionName}</option>

                        )
                    }}
                </For>


            </select>

        </>
    )
}
