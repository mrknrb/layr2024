import {Accessor} from "solid-js";
import {TypedEvent} from "../../../../lib/TypedEvents";
import * as monaco from "monaco-editor";
import {omf} from "../../../../lib/omf";
import {PropertiesTypesOmap} from "./propertiesTypesOmap";
import {PropertiesTypes} from "./propertiesTypes";

export function createEditor(getPropertyType: Accessor<PropertiesTypes>, saveEvent: TypedEvent<any>, saveFunc: (data: object) => any) {
    let monacoElem = document.createElement("div")
    monacoElem.style.backgroundColor = "blue"
    monacoElem.style.height = "100%"


    let editor = monaco.editor.create(monacoElem, {
        value: "",
        language: 'json',
        automaticLayout: true,
        theme: "vs-dark", lineNumbers: "on", minimap: {enabled: false}
    });
    saveEvent.on(event => {

        //  omf.get(PropertiesTypesOmap, getPropertyType()).setData(editor.getValue())

        saveFunc(JSON.parse(editor.getValue()))


    })

    editor.getModel()?.onDidChangeContent((event) => {

    });
    // editor.getAction('editor.action.formatDocument')?.run()
    // editor.onDidChangeModelContent((event) => {  });
    return {editorObject: editor, editorJSX: monacoElem}
}
