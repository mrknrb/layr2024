import {layrCoreCommands} from "../../../../layrCore/LayrCoreCommands";
import {createSignal, For} from "solid-js";
import {setUrlDocId} from "../../../functions/setUrlDocId";
import {VsRefresh} from 'solid-icons/vs'
import {FaSolidPlus} from 'solid-icons/fa'
import VerticalBar from "../../../general/viewElements/VerticalBar/VerticalBar";
import {VerticalBar_MenuElemData} from "../../../general/viewElements/VerticalBar/VerticalBar_MenuElemData";
import {VerticalBar_MenuElemTypes} from "../../../general/viewElements/VerticalBar/VerticalBar_MenuElemTypes";

export default function LocalDocsView() {
    const [docIds, setdocIds] = createSignal([]);

    refresh()

    function refresh() {

        layrCoreCommands.getAllLocalUserStoreDocIds().then(value => {

            if (!value) return
            setdocIds(value)


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
        <div class="mrkScroll bg-green-800 flex-col">
            <VerticalBar MenuElems={menuElems} settings={{}}></VerticalBar>


            <div class=" ">
                <For each={docIds()}>
                    {(docId) => {
                        return (
                            <div class=" bg-blue-400 mrkHoverClick" onclick={() => {
                                setUrlDocId(docId)

                                layrCoreCommands.setSelectedResultIds(["0"])

                            }}>
                                {docId}
                            </div>
                        )
                    }}
                </For>
            </div>
        </div>
    )
}
