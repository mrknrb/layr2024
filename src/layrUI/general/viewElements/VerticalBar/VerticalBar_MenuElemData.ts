import {JSX} from "solid-js/jsx-runtime"
import {VerticalBar_MenuElemTypes} from "./VerticalBar_MenuElemTypes";
import {Accessor, Setter} from "solid-js";

export interface VerticalBar_MenuElemData {
    menuElemType: VerticalBar_MenuElemTypes
    menuElemName: string
    menuElemIcon?: JSX.Element//ButtonTypenal
    menuElemFunction?: () => void//ButtonTypenal
    // selectedOptionNameSignalGet?: Accessor<string>//DropDownTypenal
    // selectedOptionNameSignalSet?: Setter<string>//DropDownTypenal
    menuElemOptions?: { optionName: string, optionFunction: () => void }[]//DropDownTypenal
}