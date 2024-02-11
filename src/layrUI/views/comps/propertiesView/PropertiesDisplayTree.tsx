import {layrCoreCommands} from "../../../../layrCore/LayrCoreCommands";
import {Accessor, Show} from "solid-js";
import {TypedEvent} from "../../../../lib/TypedEvents";
import TreeBrowser from "../../../general/viewElements/TreeBrowser/TreeBrowser";
import {omf} from "../../../../lib/omf";
import {PropertiesTypesOmap} from "./propertiesTypesOmap";
import {generateJsonTreeFromJson} from "../../../general/viewElements/TreeBrowser/GenerateJsonTreeFromJson";

export default function PropertiesDisplayTree(getPropertyType: Accessor<string>, saveEvent: TypedEvent<any>) {

    let data = omf.get(PropertiesTypesOmap, getPropertyType()).getData().data
    return (
        <div class="  mrkDefault flex-grow">

            <div class="  mrkScroll">
                <TreeBrowser jsonTree={generateJsonTreeFromJson(data)}></TreeBrowser>

            </div>
        </div>


    )
}
