import {Accessor, createEffect, createSignal, Show} from "solid-js";
import {layrCoreStore} from "../../../../layrCore/LayrCoreStore";
import * as monaco from "monaco-editor";
import {VerticalBar_MenuElemData} from "../../../general/viewElements/VerticalBar/VerticalBar_MenuElemData";
import {VerticalBar_MenuElemTypes} from "../../../general/viewElements/VerticalBar/VerticalBar_MenuElemTypes";
import VerticalBar from "../../../general/viewElements/VerticalBar/VerticalBar";
import {PropertiesTypesOmap} from "./propertiesTypesOmap";
import {omf} from "../../../../lib/omf";
import {PropertiesTypes} from "./propertiesTypes";
import {RiDeviceSaveLine} from 'solid-icons/ri'
import {TypedEvent} from "../../../../lib/TypedEvents";
import {PropertyDisplayTypes} from "./propertyDisplayTypes";
import {createEditor} from "./CreateEditor";
import PropertiesDisplayTree from "./PropertiesDisplayTree";
import {ResultFull} from "../../../../layrCore/ResultData/ResultFull";
import {ElemBaseSave} from "../../../../layrCore/elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../../../../layrCore/elems/elemBase/ElemBaseDynamic";

export default function PropertiesView() {
    let [getPropertyType, setPropertyType] = createSignal(PropertiesTypes.ResultFull)
    let [getPropertyDisplayType, setPropertyDisplayType] = createSignal(PropertyDisplayTypes.tree)

    let saveEvent: TypedEvent<any> = new TypedEvent<any>()

    // let [getEditorText, setEditorText] = createSignal(omf.get(PropertiesTypesOmap, getPropertyType()).getData())


    let editor = createEditor(saveEvent, save)

    function save(data: object) {
        omf.get(PropertiesTypesOmap, getPropertyType()).getData().then(value => {
            omf.get(PropertiesTypesOmap, getPropertyType())?.setData(value.setArgs, data)
        })


    }

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
            menuElemType: VerticalBar_MenuElemTypes.selectDropDown,
            // selectedOptionNameSignalGet: getPropertyType,
            // selectedOptionNameSignalSet: setPropertyType,
            menuElemName: "View",
            menuElemOptions: [
                {
                    optionName: PropertyDisplayTypes.tree,
                    optionFunction: () => {
                        setPropertyDisplayType(PropertyDisplayTypes.tree)
                    }
                },
                {
                    optionName: PropertyDisplayTypes.text,
                    optionFunction: () => {
                        setPropertyDisplayType(PropertyDisplayTypes.text)

                    }
                }
            ]
        }, {
            menuElemType: VerticalBar_MenuElemTypes.button,
            // selectedOptionNameSignalGet: getPropertyType,
            // selectedOptionNameSignalSet: setPropertyType,
            menuElemName: "save",
            menuElemIcon: <RiDeviceSaveLine/>, menuElemFunction: () => {

                saveEvent.emit(undefined)
            }
        }

    ]
    createEffect(() => {

        omf.get(PropertiesTypesOmap, getPropertyType())?.getData().then(value => {

            if (value.data === undefined) return
            editor.editorObject.getModel()?.setValue(JSON.stringify(value.data));
            editor.editorObject?.getAction('editor.action.formatDocument')?.run()
        })

    })
    return (
        <div class="mrkDefault  flex-col grow relative">
            <VerticalBar MenuElems={menuElems} settings={{}}></VerticalBar>

            <Show when={layrCoreStore.selectedElems.length === 1}>
                <Show when={getPropertyDisplayType() === PropertyDisplayTypes.text}>

                    {editor.editorJSX}

                </Show>
                <Show when={getPropertyDisplayType() === PropertyDisplayTypes.tree}>
                    {PropertiesDisplayTree(getPropertyType, saveEvent)}

                </Show>

            </Show>
        </div>
    )
}

/* {monacoElem}

<textarea id="container">{
    JSON.stringify(layrCoreStore.resultFullDataArray.find(value => {
        return value.resultId === layrCoreStore.selectedResultIds[0]
    }))
}</textarea>*/