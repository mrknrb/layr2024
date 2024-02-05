import {Accessor, createEffect, createSignal, Setter, Show} from "solid-js";
import GroupElemUI from "../pageView/GroupElemUI";
import {layrCoreStore} from "../../../../layrCore/LayrCoreStore";
import MonacoSolid from "../../../general/monacoEditor/MonacoSolid";
import * as monaco from "monaco-editor";
import {VerticalBar_MenuElemData} from "../../../general/viewElements/VerticalBar/VerticalBar_MenuElemData";
import {VerticalBar_MenuElemTypes} from "../../../general/viewElements/VerticalBar/VerticalBar_MenuElemTypes";
import {VsRefresh} from "solid-icons/vs";
import {FaSolidPlus} from "solid-icons/fa";
import {layrCoreCommands} from "../../../../layrCore/LayrCoreCommands";
import VerticalBar from "../../../general/viewElements/VerticalBar/VerticalBar";
import {PropertiesTypesOmap} from "./propertiesTypesOmap";
import {omf} from "../../../../lib/omf";
import {PropertiesTypes} from "./propertiesTypes";
import {RiDeviceSaveLine} from 'solid-icons/ri'
import {TypedEvent} from "../../../../lib/TypedEvents";

export default function PropertiesView() {
    let [getPropertyType, setPropertyType] = createSignal(PropertiesTypes.ResultFull)

    let menuElems: VerticalBar_MenuElemData[] = [
        {
            menuElemType: VerticalBar_MenuElemTypes.selectDropDown,
            // selectedOptionNameSignalGet: getPropertyType,
            // selectedOptionNameSignalSet: setPropertyType,
            menuElemName: "PropertyType",
            menuElemOptions: [
                {
                    optionName: PropertiesTypes.ResultFull,
                    optionFunction: () => {
                        setPropertyType(PropertiesTypes.ResultFull)
                    }
                },
                {
                    optionName: PropertiesTypes.ResultSave,
                    optionFunction: () => {
                        setPropertyType(PropertiesTypes.ResultSave)
                    }
                }
            ]
        }, {
            menuElemType: VerticalBar_MenuElemTypes.button,
            // selectedOptionNameSignalGet: getPropertyType,
            // selectedOptionNameSignalSet: setPropertyType,
            menuElemName: "PropertyType",
            menuElemIcon: <RiDeviceSaveLine/>, menuElemFunction: () => {
                saveEvent.emit(undefined)
            }
        }

    ]

    let saveEvent: TypedEvent<any> = new TypedEvent<any>()
    return (
        <div class="mrkScroll bg-green-800 flex-col grow relative">
            <VerticalBar MenuElems={menuElems} settings={{}}></VerticalBar>

            {monacoElem(getPropertyType, saveEvent)}
            <Show when={layrCoreStore.selectedResultIds.length === 1}>


            </Show>
        </div>
    )
}

function monacoElem(getPropertyType: Accessor<string>, saveEvent: TypedEvent<any>) {
    let monacoElem = document.createElement("div")
    monacoElem.style.backgroundColor = "blue"
    monacoElem.style.height = "100%"

    let editor = monaco.editor.create(monacoElem, {
        value: omf.get(PropertiesTypesOmap, getPropertyType()).getData(),
        language: 'json',
        automaticLayout: true,
        theme: "vs-dark", lineNumbers: "on"
    });
    editor.getAction('editor.action.formatDocument')?.run()
    saveEvent.on(event => {
        debugger

        omf.get(PropertiesTypesOmap, getPropertyType()).setData(editor.getValue())
    })
    // editor.onDidChangeModelContent((event) => {  });
    return monacoElem
}

/* {monacoElem}

<textarea id="container">{
    JSON.stringify(layrCoreStore.resultFullDataArray.find(value => {
        return value.resultId === layrCoreStore.selectedResultIds[0]
    }))
}</textarea>*/