import {layrCoreCommands} from "../../../../layrCore/LayrCoreCommands";
import {createSignal, For} from "solid-js";
import {setUrlDocId} from "../../../functions/setUrlDocId";
import {VsRefresh} from 'solid-icons/vs'
import {FaSolidPlus} from 'solid-icons/fa'
import VerticalBar from "../../../general/viewElements/VerticalBar/VerticalBar";
import {VerticalBar_MenuElemData} from "../../../general/viewElements/VerticalBar/VerticalBar_MenuElemData";
import {VerticalBar_MenuElemTypes} from "../../../general/viewElements/VerticalBar/VerticalBar_MenuElemTypes";
import TreeBrowser from "../../../general/viewElements/TreeBrowser/TreeBrowser";
import {JsonDataTree} from "../../../general/viewElements/TreeBrowser/JsonDataTree";

export default function LocalDocsView() {
    const [docIds, setdocIds] = createSignal([]);
    const [getJsonTree, setJsonTree] = createSignal<JsonDataTree<any>[]>([]);


    refresh()

    function refresh() {
        let a: JsonDataTree[] = []
        layrCoreCommands.getAllLocalUserStoreDocIds().then(value => {

            if (!value) return

            value.forEach((value2, index) => {

                a.push({
                    name: value2, children: [], onClickArgs: value2, onClick: (jsonDataActual, onClickArgs) => {
                        setUrlDocId(onClickArgs)

                        layrCoreCommands.setSelectedResultIds(["0"])


                    }
                })

            })
            setJsonTree(a)
        })
    }

    let menuElems: VerticalBar_MenuElemData[] = [
        {
            menuElemType: VerticalBar_MenuElemTypes.button,
            menuElemName: "refresh", menuElemIcon: <VsRefresh/>, menuElemFunction: () => {
                refresh()

            }
        },
        {
            menuElemType: VerticalBar_MenuElemTypes.button,
            menuElemName: "add", menuElemIcon: <FaSolidPlus/>, menuElemFunction: () => {
                layrCoreCommands.createLocalElem()
                refresh()

            }
        }, {
            menuElemType: VerticalBar_MenuElemTypes.selectDropDown,
            menuElemName: "test",
            menuElemOptions: [{optionName: "test", optionFunction: () => (console.log("eeee"))}, {
                optionName: "test2",
                optionFunction: () => (console.log("zzz"))
            }]
        },

    ]


    return (
        <div class="mrkScroll  flex-col ">
            <VerticalBar MenuElems={menuElems} settings={{}}></VerticalBar>


            <div class=" ">

                <TreeBrowser jsonTree={getJsonTree()}></TreeBrowser>


            </div>
        </div>
    )
}
//