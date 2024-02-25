import {ElemBaseSave} from "../elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../elems/elemBase/ElemBaseDynamic";
import {ResultFull} from "./ResultFull";
import {ResultTypes} from "./ResultTypes";
import {omf} from "../../lib/omf";
import {crudEnums} from "../../layrQuery/types/crudEnums";
import {querySchemaRun} from "../functions/querySchemaRun";
import {layrCoreStore} from "../LayrCoreStore";
import {MrkLib} from "../../lib/MrkLib";
import {newResultFull} from "./newResultFull";
import {loadResultFullAllElemsAllPointers} from "./loadResultFullAllElemsAllPointers";
import {omap} from "../../lib/omap";

export async function loadRecursivelyResultFullElem(resultFull: ResultFull<omap<ElemBaseSave>, omap<ElemBaseDynamic>>) {


    if (!resultFull) return
    await loadResultFullAllElemsAllPointers(resultFull)

    let childResults = layrCoreStore.resultFullDataArray.filter(value => {
        return value.parentResultId === resultFull.resultId

    })
    childResults.forEach(value => {

        loadRecursivelyResultFullElem(value)

    })


}
