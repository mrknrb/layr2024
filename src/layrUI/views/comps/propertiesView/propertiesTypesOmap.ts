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

export let PropertiesTypesOmap = omf.setLot<{ getData: () => { data: any, setArgs: ResultFull<ElemBaseSave, ElemBaseDynamic> }, setData: (setArgs: ResultFull<ElemBaseSave, ElemBaseDynamic>, newData: any) => void }, PropertiesTypes>(omf.create(), [{
    key: PropertiesTypes.ResultFull, object: {
        getData: () => {
            let setArgs = layrCoreStore.resultFullDataArray.find(value => {
                return value.resultId === layrCoreStore.selectedResultIds[0]
            })

            let data = layrCoreStore.resultFullDataArray.find(value => {
                return value.resultId === layrCoreStore.selectedResultIds[0]
            })
            return {data, setArgs}
        },
        setData: (data) => {

        }
    }
}, {
    key: PropertiesTypes.ResultSave, object: {
        getData: () => {
            let setArgs = layrCoreStore.resultFullDataArray.find(value => {
                return value.resultId === layrCoreStore.selectedResultIds[0]
            })


            let data = layrCoreStore.resultFullDataArray.find(value => {
                return value.resultId === layrCoreStore.selectedResultIds[0]
            })?.resultSave
            return {data, setArgs}
        },
        setData: (setArgs, newData) => {
            srcUpdateRun(setArgs, newData)


            let result: ResultFull<ElemBaseSave, ElemBaseDynamic> = layrCoreStore.resultFullDataArray.find(value => {
                return value.resultId === layrCoreStore.selectedResultIds[0]


            })
            if (!result) return
            result.resultSave.srcPointers
        }
    }
}])

