import {ResultFull} from "../../../../layrCore/ResultData/ResultFull";
import {ElemGroupSave} from "../../../../layrCore/elems/elemGroup/ElemGroupSave";
import {ElemGroupDynamic} from "../../../../layrCore/elems/elemGroup/ElemGroupDynamic";
import {createEffect, createSignal, For, Show} from "solid-js";
import {menuOptionsStatic} from "../../../menu/MenuOptionsStatic";
import {layrUIStore} from "../../../LayrUIStore";
import {layrCoreStore} from "../../../../layrCore/LayrCoreStore";
import {layrCoreCommands} from "../../../../layrCore/LayrCoreCommands";
import {JsonDataTree} from "../../../general/viewElements/TreeBrowser/JsonDataTree";
import TreeBrowser from "../../../general/viewElements/TreeBrowser/TreeBrowser";
import {MrkLib} from "../../../../lib/MrkLib";
import {omap} from "../../../../lib/omap";
import {omf} from "../../../../lib/omf";
import {ResultAllIdType} from "../../../../layrCore/ResultData/ResultAllIdType";
import {ElemBaseSave} from "../../../../layrCore/elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../../../../layrCore/elems/elemBase/ElemBaseDynamic";
import {setSelectedIds} from "../../../../layrCore/functions/setSelectedIds";

export default function PageMapListElem(props: { groupElemFull: ResultFull<ElemGroupSave, ElemGroupDynamic> }) {
    let [geti, seti] = createSignal(JsonTreeDataMaker("0"))
    createEffect(v => {
        layrCoreStore
        seti(JsonTreeDataMaker("0"))

    })

    return (
        <div class="   ">
            <Show when={geti()}>
                <TreeBrowser jsonTree={[geti()]}></TreeBrowser>

            </Show>


        </div>
    )
}

function backgroundColor(resultActual: ResultFull, omapSelected: omap<string, string>) {

    if (omf.get(omapSelected, resultActual.resultId)) {

        return "#4d4d4d"
    } else {
        return ""
    }

}

function JsonTreeDataMaker(startResultFullId: string) {
    let startResult = layrCoreStore.resultFullDataArray.find(value => {
        return value.resultId === startResultFullId;
    });


    if (!startResult) return;

    return srcLoop(startResult);

    function srcLoop(resultActual: ResultFull<omap<ElemBaseSave>, omap<ElemBaseDynamic>>) {
        if (!resultActual) return;
        if (!resultActual.resultSave) return
        let jsonTreeActualElem: JsonDataTree<ResultAllIdType> = {
            name: "parentSrc:  " + resultActual.parentSrcId + "   result:  " + resultActual.resultId,
            onClickArgs: {
                resultId: resultActual.resultId,
                elemId: resultActual.parentElemId,
                srcId: resultActual.parentSrcId
            },
            backgroundColor: "#731f1f",// backgroundColor(resultActual, omapSelected),
            children: [],
            onClick: (dataTree, onClickArgs) => {
                setSelectedIds([onClickArgs])
            }
        };

        omf.forEach(resultActual.resultSave, (elem, elemId) => {
            let child = elemLoop(resultActual, elemId);
            if (child) {
                jsonTreeActualElem.children.push(child);
            }

        })
        return jsonTreeActualElem;
    }

    function elemLoop(resultActual: ResultFull<omap<ElemBaseSave>, omap<ElemBaseDynamic>>, elemId: string) {

        if (!resultActual) return;
        if (!resultActual.resultSave) return
        let jsonTreeActualElem: JsonDataTree<ResultAllIdType> = {
            name: elemId,
            onClickArgs: {resultId: resultActual.resultId, elemId},
            backgroundColor: "#27731f",// backgroundColor(resultActual, omapSelected),
            children: [],
            onClick: (dataTree, onClickArgs) => {
                setSelectedIds([onClickArgs])
            }
        };

        omf.forEach(omf.get(resultActual.resultSave, elemId).srcSaveList, (srcSave, srcId) => {

            let childresult = layrCoreStore.resultFullDataArray.find((value, index) => {
                return value.parentResultId === resultActual.resultId && value.parentSrcId === srcId


            })

            if (!childresult) return
            let child = srcLoop(childresult);
            if (child) {
                jsonTreeActualElem.children.push(child);
            }

        })
        return jsonTreeActualElem;


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