import {layrCoreCommands} from "../../../../layrCore/LayrCoreCommands";
import {Accessor, createSignal, Show} from "solid-js";
import {TypedEvent} from "../../../../lib/TypedEvents";
import TreeBrowser from "../../../general/viewElements/TreeBrowser/TreeBrowser";
import {omf} from "../../../../lib/omf";
import {PropertiesTypesOmap} from "./propertiesTypesOmap";
import {generateJsonTreeFromJson} from "../../../general/viewElements/TreeBrowser/GenerateJsonTreeFromJson";

export default function PropertiesDisplayTree(getPropertyType: Accessor<string>, saveEvent: TypedEvent<any>) {

    let [getData, setData] = createSignal<{ data: any, setArgs: any }>()

    omf.get(PropertiesTypesOmap, getPropertyType()).getData().then(value => {

        setData(value)
    })
    return (
        <div class="  mrkDefault flex-grow">

            <div class="  mrkScroll">
                <TreeBrowser jsonTree={generateJsonTreeFromJson(getData()?.data)}></TreeBrowser>

            </div>
        </div>


    )
}
