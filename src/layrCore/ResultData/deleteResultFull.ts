import {ResultFull} from "./ResultFull";
import {ElemBaseSave} from "../elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../elems/elemBase/ElemBaseDynamic";
import {layrCoreStore, layrCoreStoreUpdater} from "../LayrCoreStore";
import {omf} from "../../lib/omf";
import {DefaultPointerEnums} from "../functions/generic/DefaultPointerEnums";
import {objectModificationCompare} from "../functions/generic/objectModificationCompare";
import {srcQueryTaskGenerator} from "../functions/srcUpdateTasksGenerator";
import {findJsonPath} from "../functions/findElemTree/findJsonPath";
import {pathToObjectConverter} from "../functions/generic/pathToObjectConverter";
import {querySchemaRun} from "../functions/querySchemaRun";
import {loadRecursivelyResultFullElem} from "./loadRecursivelyResultFullElem";

export async function deleteSrcResults(parentResultFullId: string, srcId: string) {


    await layrCoreStoreUpdater.updateStore((storeCopy, storeUpdatedResult) => {
        storeCopy.resultFullDataArray = storeCopy.resultFullDataArray.filter((value, index) => {
            return !(value.parentResultId === parentResultFullId && value.parentSrcId === srcId)


        })

        storeUpdatedResult(storeCopy)

    })


}