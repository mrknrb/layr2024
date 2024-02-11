import TreeBrowserDataElem from "./TreeBrowserDataElem";
import {JsonDataTree} from "./JsonDataTree";
import {generateJsonTreeFromJson} from "./GenerateJsonTreeFromJson";


export default function TreeBrowser(props: { jsonTree: JsonDataTree[] }) {

    return (
        <>

            < TreeBrowserDataElem jsonTree={props.jsonTree}></TreeBrowserDataElem>


        </>
    )
}
