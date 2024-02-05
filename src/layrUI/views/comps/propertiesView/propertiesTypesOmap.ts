import {omf} from "../../../../lib/omf";
import {JSX} from "solid-js/jsx-runtime";
import {VerticalBar_MenuElemTypes} from "../../../general/viewElements/VerticalBar/VerticalBar_MenuElemTypes";
import VerticalBarMenuElemButton from "../../../general/viewElements/VerticalBar/VerticalBarMenuElemButton";
import VerticalBarMenuElemSelectDropDown
    from "../../../general/viewElements/VerticalBar/VerticalBarMenuElemSelectDropDown";
import {PropertiesTypes} from "./propertiesTypes";
import {layrCoreStore} from "../../../../layrCore/LayrCoreStore";

export let PropertiesTypesOmap = omf.setLot<{ getData: () => string, setData: (data: string) => void }, PropertiesTypes>(omf.create(), [{
    key: PropertiesTypes.ResultFull, object: {
        getData: () => {
            return JSON.stringify(layrCoreStore.resultFullDataArray.find(value => {
                return value.resultId === layrCoreStore.selectedResultIds[0]
            }))
        },
        setData: (data) => {
        }
    }
}, {
    key: PropertiesTypes.ResultSave, object: {
        getData: () => {
            return JSON.stringify(layrCoreStore.resultFullDataArray.find(value => {
                return value.resultId === layrCoreStore.selectedResultIds[0]
            })?.resultSave)
        },
        setData: (data) => {
            let result = layrCoreStore.resultFullDataArray.find(value => {
                return value.resultId === layrCoreStore.selectedResultIds[0]
            })


        }
    }
}])

