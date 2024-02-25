import {loadLocalRootElem} from "./functions/local/loadLocalRootElem";
import {elemRefresh} from "./functions/elemRefresh";
import {querySchemaRun} from "./functions/querySchemaRun";
import {querySchemaToQuery} from "./functions/querySchemaToQuery";
import {createDefaultLocalElem} from "./functions/local/createDefaultLocalElem";
import {localIndexeddbInit} from "./functions/local/localIndexeddbInit";
import {getRootElem} from "./ResultData/getRootElem";
import {getAllLocalUserStoreDocIds} from "./functions/getAllLocalUserStoreDocIds";
import {setSelectedIds} from "./functions/setSelectedIds";
import {pathToObjectConverter} from "./functions/generic/pathToObjectConverter";
import {objectModificationCompare} from "./functions/generic/objectModificationCompare";
import {srcUpdateTasksGenerator} from "./functions/srcUpdateTasksGenerator";

export let layrCoreCommands = {

    //yx Init
    localIndexeddbInit,

    //yx load page
    loadLocalRootElem,
    createDefaultLocalElem,
    getRootElem,

    //yx running page elems
    elemRefresh,

    //yx other functions
    setSelectedIds,
    getAllLocalUserStoreDocIds,
    pathToObjectConverter,
    querySchemaRun,
    querySchemaToQuery,

    //yx unused
    objectModificationCompare,
    srcUpdateTasksGenerator,

    //yx uncategorised


}