import {ResultFull} from "../../../../layrCore/ResultData/ResultFull";
import {ElemGroupSave} from "../../../../layrCore/elems/elemGroup/ElemGroupSave";
import {ElemGroupDynamic} from "../../../../layrCore/elems/elemGroup/ElemGroupDynamic";
import {For, Show} from "solid-js";
import {menuOptionsStatic} from "../../../menu/MenuOptionsStatic";
import {layrUIStore} from "../../../LayrUIStore";
import {layrCoreStore} from "../../../../layrCore/LayrCoreStore";
import {layrCoreCommands} from "../../../../layrCore/LayrCoreCommands";

export default function PageMapListElem(props: { groupElemFull: ResultFull<ElemGroupSave, ElemGroupDynamic> }) {

    let childResults = layrCoreStore.resultFullDataArray.filter(value => {
        return value.parentResultId === props.groupElemFull.resultId

    })
    return (
        <div class="bg-amber-600   ">
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
                </For></div>


        </div>
    )
}
