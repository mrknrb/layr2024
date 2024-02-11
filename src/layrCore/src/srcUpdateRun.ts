import {ResultFull} from "../ResultData/ResultFull";
import {layrCoreStore} from "../LayrCoreStore";
import {ElemBaseSave} from "../elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../elems/elemBase/ElemBaseDynamic";
import {omf} from "../../lib/omf";
import {objectModificationCompare} from "../functions/generic/objectModificationCompare";
import {DefaultPointerEnums} from "../functions/generic/DefaultPointerEnums";
import {srcQueryTaskGenerator} from "../functions/srcUpdateTasksGenerator";
import {findJsonPath} from "../functions/findElemTree/findJsonPath";
import {querySchemaRun} from "../functions/querySchemaRun";
import {pathToObjectConverter} from "../functions/generic/pathToObjectConverter";
import {layrCoreCommands} from "../LayrCoreCommands";
import {loadRecursivelyResultFullElem} from "../ResultData/loadRecursivelyResultFullElem";

export function srcUpdateRun(resultFullChild: ResultFull<ElemBaseSave, ElemBaseDynamic>, newData: any) {


    let resultFullParent: ResultFull<ElemBaseSave, ElemBaseDynamic> | undefined = layrCoreStore.resultFullDataArray.find(value => {
        return value.resultId === resultFullChild.parentResultId

    })

    if (!resultFullParent || !resultFullParent.resultSave.srcPointers || !resultFullParent.resultSave.srcSaveList) return
    let srcSaveId = omf.get(resultFullParent.resultSave.srcPointers, DefaultPointerEnums.elems)
    let srcSave = omf.get(resultFullParent.resultSave.srcSaveList, srcSaveId)

    /* let resultFullChild: ResultFull<ElemBaseSave, ElemBaseDynamic> | undefined = layrCoreStore.resultFullDataArray.find(value => {

         return value.resultId === omf.get(resultFullParent.srcResults, srcSaveId)

     })
     if (!resultFullChild) return
 */


    let comparisonArray = objectModificationCompare(resultFullChild.resultSave, newData)

    let actions = srcQueryTaskGenerator(comparisonArray, srcSave)


    actions.forEach(async (srcAction, index) => {
        let compPath = comparisonArray[index]
        if (srcAction === undefined || compPath === undefined) return
        let actionNewData = findJsonPath(newData, srcAction.resultRootPath)//uj adat, amit be akarunk illeszteni
        let addedData = pathToObjectConverter([{path: srcAction.queryRootPath, object: actionNewData}])
        let querySchemaResult = await querySchemaRun(srcAction.querySchema, addedData)
    })
    loadRecursivelyResultFullElem(resultFullParent)

}