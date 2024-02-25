import {ResultFull} from "./ResultFull";
import {ResultTypes} from "./ResultTypes";
import {ElemBaseSave} from "../elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../elems/elemBase/ElemBaseDynamic";
import {omf} from "../../lib/omf";
import {querySchemaRun} from "../functions/querySchemaRun";
import {layrCoreStore, layrCoreStoreUpdater} from "../LayrCoreStore";
import {newResultFull} from "./newResultFull";
import {MrkLib} from "../../lib/MrkLib";
import {srcActionDefaultNames} from "../src/srcActionDefaultNames";
import {deleteSrcResults} from "./deleteResultFull";
import {omap} from "../../lib/omap";
import {loadResultSrc} from "./loadResultSrc";

export async function loadResultFullAllElemsAllPointers<resultSaveType extends omap<ElemBaseSave>, resultDynamicType extends omap<ElemBaseDynamic>>(resultFull: ResultFull<resultSaveType, resultDynamicType>) {

    if (resultFull.resultType !== ResultTypes.layrElem) return
    await omf.forEachAsync(resultFull.resultSave, async (elems, elemId) => {
        if (elems.srcSaveList === undefined || elems.srcPointers === undefined) return


        await omf.forEachAsync(elems.srcPointers, async (srcId, pointerName) => {

            // await deleteSrcResults(resultFull.resultId, srcId)


            await loadResultSrc(resultFull, elemId, srcId)
        })


    })


}