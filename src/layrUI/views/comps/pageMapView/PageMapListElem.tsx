import {ResultFull} from "../../../../layrCore/ResultData/ResultFull";
import {ElemGroupSave} from "../../../../layrCore/elems/elemGroup/ElemGroupSave";
import {ElemGroupDynamic} from "../../../../layrCore/elems/elemGroup/ElemGroupDynamic";
import {For, Show} from "solid-js";
import {menuOptionsStatic} from "../../../menu/MenuOptionsStatic";
import {layrUIStore} from "../../../LayrUIStore";
import {layrCoreStore} from "../../../../layrCore/LayrCoreStore";
import {layrCoreCommands} from "../../../../layrCore/LayrCoreCommands";
import {JsonDataTree} from "../../../general/viewElements/TreeBrowser/JsonDataTree";
import TreeBrowser from "../../../general/viewElements/TreeBrowser/TreeBrowser";

export default function PageMapListElem(props: { groupElemFull: ResultFull<ElemGroupSave, ElemGroupDynamic> }) {

    let childResults = layrCoreStore.resultFullDataArray.filter(value => {
        return value.parentResultId === props.groupElemFull.resultId

    })
    let i = JsonTreeDataMaker("0")

    return (
        <div class="   ">
            <Show when={i}>
                <TreeBrowser jsonTree={[i]}></TreeBrowser>

            </Show>


        </div>
    )
}

function JsonTreeDataMaker(startResultFullId: string) {
    let startResult = layrCoreStore.resultFullDataArray.find(value => {
        return value.resultId === startResultFullId;
    });

    if (!startResult) return;

    return loop(startResult);

    function loop(resultActual?: ResultFull<any, any>) {
        if (!resultActual) return;
        let jsonTreeActual: JsonDataTree<ResultFull<any, any>> = {
            name: resultActual.resultId, onClickArgs: resultActual,
            children: [], onClick: (dataTree, onClickArgs) => {
                layrCoreCommands.setSelectedResultIds([onClickArgs.resultId])


            }
        };

        let childResults = layrCoreStore.resultFullDataArray.filter(value => {
            return value.parentResultId === resultActual.resultId;
        });

        if (childResults.length === 0) return jsonTreeActual;

        jsonTreeActual.children = [];

        childResults.forEach(childResult => {


            let child = loop(childResult);
            if (child) {
                jsonTreeActual.children.push(child);
            }
        });

        return jsonTreeActual;
    }


}

/*
            <div class="bg-amber-600   font-bold mrkHoverClick  w-full" onClick={() => {
                layrCoreCommands.setSelectedResultIds([props.groupElemFull.resultId])


            }}>{props.groupElemFull.resultId}</div>
            <div class="bg-amber-600    w-full pl-2">
                <For each={childResults}>
                    {(ElemResultData) => {
                        return (
                            <>

                                <PageMapListElem groupElemFull={ElemResultData}></PageMapListElem>
                            </>
                        )
                    }}
                </For>
            </div>
*/