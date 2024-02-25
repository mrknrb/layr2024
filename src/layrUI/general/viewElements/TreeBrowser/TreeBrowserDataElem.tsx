import {For} from "solid-js";
import {JsonDataTree} from "./JsonDataTree";
import {MrkLib} from "../../../../lib/MrkLib";


export default function TreeBrowserDataElem(props: { jsonTree: JsonDataTree<any>[] }) {

    //  bg-blue-600 bg-opacity-30
    return (
        <>
            <For each={props.jsonTree}>
                {(jsonTreeChild, index) => {
                    return (

                        <div class={"pl-2 border-l border-t-2 "}
                             style={"background-color:" + jsonTreeChild.backgroundColor}
                        >
                            <div class=" flex-row flex mrkHoverClick bg-inherit"
                                 onClick={() => {

                                     if (jsonTreeChild.onClick) jsonTreeChild.onClick(jsonTreeChild, jsonTreeChild.onClickArgs)
                                 }}>
                                <div class="font-bold text-gray-300">{jsonTreeChild.name}</div>
                                {() => {
                                    if (jsonTreeChild.primitiveData) {
                                        return <input class="bg-transparent text-gray-300 ml-2 flex-grow min-w-0 flex-1"
                                                      value={JSON.stringify(jsonTreeChild.primitiveData)}/>
                                    }

                                }}
                            </div>

                            <div>

                                < TreeBrowserDataElem jsonTree={jsonTreeChild.children}></TreeBrowserDataElem>

                            </div>
                        </div>
                    )
                }}
            </For>
        </>
    )
}
