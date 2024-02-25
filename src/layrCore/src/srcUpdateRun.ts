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
import {omap} from "../../lib/omap";

export async function srcUpdateRun(resultFullParentId: string, parentElemId: string, parentSrcId: string, newData: any) {
    let resultFullParent: ResultFull<omap<ElemBaseSave>, omap<ElemBaseDynamic>> | undefined = layrCoreStore.resultFullDataArray.find(value => {
        return resultFullParentId === value.resultId


    })
    if (!resultFullParent) return
    let elem = omf.get(resultFullParent.resultSave, parentElemId)
    if (!elem || !elem.srcSaveList) return
    let srcSave = omf.get(elem.srcSaveList, parentSrcId)
    if (!srcSave) return
    let resultFullChild: ResultFull<omap<ElemBaseSave>, omap<ElemBaseDynamic>> | undefined = layrCoreStore.resultFullDataArray.find(value => {
        return resultFullParentId === value.parentResultId && parentElemId === value.parentElemId && parentSrcId === value.parentSrcId


    })

    if (!resultFullChild) return
    /* let resultFullChild: ResultFull<ElemBaseSave, ElemBaseDynamic> | undefined = layrCoreStore.resultFullDataArray.find(value => {

         return value.resultId === omf.get(resultFullParent.srcResults, srcSaveId)

     })
     if (!resultFullChild) return
 */


    let comparisonArray = objectModificationCompare(resultFullChild.resultSave, newData)

    let actions = srcQueryTaskGenerator(comparisonArray, srcSave)

    await Promise.all(actions.map(async (srcAction, index) => {
        let compPath = comparisonArray[index];
        if (srcAction === undefined || compPath === undefined) return;

        let actionNewData = findJsonPath(newData, srcAction.resultRootPath);
        let addedData = pathToObjectConverter([{path: srcAction.queryRootPath, object: actionNewData}]);
        let querySchemaResult = await querySchemaRun(srcAction.querySchema, addedData);
    }));
    await loadRecursivelyResultFullElem(resultFullParent)


}