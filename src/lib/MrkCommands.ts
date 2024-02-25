import {omap} from "./omap";
import {Static, TProperties, Type} from "@sinclair/typebox";

export interface MrkCommand<CommandArgSave> {
    CommandArgJSONType: TProperties
    execute: (arg: CommandArgSave) => any
    unExecute: (arg: CommandArgSave) => any
}


export interface MrkCommandSave<CommandArgSave> {
    commandArgSave: CommandArgSave
    commandName: string
}


export type MrkCommandList = omap<MrkCommand<any>>


export type MrkCommandSaveStack = MrkCommandSave<any>[]


/*

let jsontype = Type.Object({x: Type.Number()})
let a: MrkCommand<Static<typeof jsontype>> = {
    CommandArgJSONType: jsontype,
    execute: (args) => {
    },
    unExecute: (args) => {
    }
}
console.log(JSON.stringify(a.CommandArgJSONType))

*/