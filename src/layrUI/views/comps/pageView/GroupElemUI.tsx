import {ResultFull} from "../../../../layrCore/ResultData/ResultFull";
import {ElemGroupSave} from "../../../../layrCore/elems/elemGroup/ElemGroupSave";
import {ElemGroupDynamic} from "../../../../layrCore/elems/elemGroup/ElemGroupDynamic";
import {For, Show} from "solid-js";
import {menuOptionsStatic} from "../../../menu/MenuOptionsStatic";
import {layrUIStore} from "../../../LayrUIStore";
import {layrCoreStore} from "../../../../layrCore/LayrCoreStore";

export default function GroupElemUI(props: { groupElemFull: ResultFull<ElemGroupSave, ElemGroupDynamic> }) {

    let childResults = layrCoreStore.resultFullDataArray.filter(value => {
        return value.parentResultId === props.groupElemFull.resultId

    })
    return (
        <div class="bg-amber-600 border-4 p-2 absolute overflow-auto h-full w-full">
            {props.groupElemFull.resultId}
            <For each={childResults}>
                {(ElemResultData) => {
                    return (
                        <>
                            <GroupElemUI groupElemFull={ElemResultData}></GroupElemUI>
                        </>
                    )
                }}
            </For>

        </div>
    )
}
