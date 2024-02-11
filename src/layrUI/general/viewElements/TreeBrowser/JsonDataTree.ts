import {JSX} from "solid-js/jsx-runtime"

export type JsonDataTree<onclickArgsType = any> = {
    children: JsonDataTree<onclickArgsType>[]
    name: string,
    primitiveData?: any
    onClick?: onClickAction<onclickArgsType>
    onClickArgs?: onclickArgsType,
    backgroundColor?: string,
    buttonActions?: TreeActions[]
}

type TreeActions<onclickArgsType = any> = {
    onClick?: onClickAction<onclickArgsType>
    onClickArgs?: onclickArgsType
    ActionButtonName: string
    ActionButtonIcon: JSX.Element
}
type onClickAction<onclickArgsType = any> = (jsonDataActual: JsonDataTree<onclickArgsType>, onClickArgs: onclickArgsType) => void