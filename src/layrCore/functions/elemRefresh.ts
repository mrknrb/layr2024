import {ElemGroupDynamic} from "../elems/elemGroup/ElemGroupDynamic";
import {crudEnums} from "../../layrQuery/types/crudEnums";
import {querySchemaRun} from "./querySchemaRun";
import {layrCoreStoreUpdater} from "../LayrCoreStore";
import {omf} from "../../lib/omf";
import {findElementById} from "./findElemTree/findElementById";


export async function elemRefresh(elemId: string) {
    await layrCoreStoreUpdater.updateStore((storeCopy, storeUpdatedResult) => {
        debugger
        let frame = findElementById(storeCopy, elemId)

        if (!frame?.saveData.srcSaveList || !frame.saveData.ownSrcIds?.queryBundleID) return
        let getSchema1 = omf.get(frame.saveData.srcSaveList, frame.saveData.ownSrcIds?.queryBundleID)
        let getSchema = omf.get(getSchema1, crudEnums.get)


        querySchemaRun(getSchema, {}).then((result) => {
            storeCopy.resultFullDataArray.srcResults = result
            storeUpdatedResult(storeCopy)
        })


    })
}