import {MenuButtonEnum} from "./MenuButtonEnum";

export interface MenuOptionType {
    menuButton: MenuButtonEnum
    menuOptionName: string
    optionFunction: () => any
}