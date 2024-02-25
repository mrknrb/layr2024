import {ResultFull} from "../ResultData/ResultFull";
import {omap} from "../../lib/omap";
import {ElemBaseSave} from "../elems/elemBase/ElemBaseSave";
import {ElemBaseDynamic} from "../elems/elemBase/ElemBaseDynamic";
import {layrCoreStore} from "../LayrCoreStore";
import {omf} from "../../lib/omf";
import {objectModificationCompare} from "../functions/generic/objectModificationCompare";
import {srcQueryTaskGenerator} from "../functions/srcUpdateTasksGenerator";
import {findJsonPath} from "../functions/findElemTree/findJsonPath";
import {pathToObjectConverter} from "../functions/generic/pathToObjectConverter";
import {querySchemaRun} from "../functions/querySchemaRun";
import {loadRecursivelyResultFullElem} from "../ResultData/loadRecursivelyResultFullElem";
import {srcUpdateRun} from "./srcUpdateRun";

export async function SrcUpdateElemRun(resultFullParentId: string, parentElemId: string, parentSrcId: string, childElemId: string, newData: any) {

    let childelem =


        await srcUpdateRun(resultFullParentId, parentElemId, parentSrcId, childElemId, newData)

}