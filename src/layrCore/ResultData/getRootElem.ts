import GroupElemUI from "../../layrUI/views/comps/pageView/elemUIs/GroupElem/GroupElemUI";
import {ElemBaseSave} from "../elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../elems/elemBase/ElemBaseDynamic";
import {ResultFull} from "./ResultFull";
import {loadResultFullAllElemsAllPointers} from "./loadResultFullAllElemsAllPointers";
import {layrCoreStore} from "../LayrCoreStore";


export function getRootElem() {

    return layrCoreStore.resultFullDataArray.find((value, index) => {
        return value.resultId === "0"


    })


}
