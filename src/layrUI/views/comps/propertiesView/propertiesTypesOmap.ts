import {omf} from "../../../../lib/omf";
import {JSX} from "solid-js/jsx-runtime";
import {VerticalBar_MenuElemTypes} from "../../../general/viewElements/VerticalBar/VerticalBar_MenuElemTypes";
import VerticalBarMenuElemButton from "../../../general/viewElements/VerticalBar/VerticalBarMenuElemButton";
import VerticalBarMenuElemSelectDropDown
    from "../../../general/viewElements/VerticalBar/VerticalBarMenuElemSelectDropDown";
import {PropertiesTypes} from "./propertiesTypes";
import {layrCoreStore} from "../../../../layrCore/LayrCoreStore";
import {ResultFull} from "../../../../layrCore/ResultData/ResultFull";
import {ElemBaseSave} from "../../../../layrCore/elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../../../../layrCore/elems/elemBase/ElemBaseDynamic";
import {srcUpdateRun} from "../../../../layrCore/src/srcUpdateRun";
import {omap} from "../../../../lib/omap";

export let PropertiesTypesOmap = omf.setLot<{ getData: () => Promise<{ data: any, setArgs: ResultFull<omap<ElemBaseSave>, omap<ElemBaseDynamic>> }>, setData: (setArgs: ResultFull<omap<ElemBaseSave>, omap<ElemBaseDynamic>>, newData: any) => Promise<any> }, PropertiesTypes>(omf.create(), [{
    key: PropertiesTypes.ResultFull, object: {
        getData: async () => {
            let setArgs = layrCoreStore.resultFullDataArray.find(value => {
                return value.resultId === layrCoreStore.selectedElems[0]?.resultId
            })

            let data = layrCoreStore.resultFullDataArray.find(value => {
                return value.resultId === layrCoreStore.selectedElems[0]?.resultId
            })
            return {data, setArgs}
        },
        setData: async (data) => {

        }
    }
}, {
    key: PropertiesTypes.ResultSave, object: {
        getData: async () => {
            let setArgs = layrCoreStore.resultFullDataArray.find(value => {
                return value.resultId === layrCoreStore.selectedElems[0]?.resultId
            })


            let data = layrCoreStore.resultFullDataArray.find(value => {
                return value.resultId === layrCoreStore.selectedElems[0]?.resultId
            })?.resultSave
            return {data, setArgs}
        },
        setData: async (setArgs, newData) => {
            let resultFullParent = layrCoreStore.resultFullDataArray.find(value => {
                return value.resultId === setArgs.parentResultId

            })
            if (!resultFullParent) return

            await srcUpdateRun(resultFullParent.resultId, setArgs.parentElemId, setArgs.parentSrcId, newData)


        }
    }
}])

