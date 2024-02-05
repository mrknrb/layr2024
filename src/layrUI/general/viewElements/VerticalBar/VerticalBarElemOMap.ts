import {JSX} from "solid-js/jsx-runtime";
import {omf} from "../../../../lib/omf";
import {VerticalBar_MenuElemTypes} from "./VerticalBar_MenuElemTypes";
import VerticalBarMenuElemButton from "./VerticalBarMenuElemButton";
import VerticalBarMenuElemSelectDropDown from "./VerticalBarMenuElemSelectDropDown";

export let VerticalBarElemOMap = omf.create<JSX.Element, VerticalBar_MenuElemTypes>({
    [VerticalBar_MenuElemTypes.button]: VerticalBarMenuElemButton,
    [VerticalBar_MenuElemTypes.selectDropDown]: VerticalBarMenuElemSelectDropDown,
    [VerticalBar_MenuElemTypes.menu]: VerticalBarMenuElemButton,
})
