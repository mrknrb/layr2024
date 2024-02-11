import {loadLocalRootElem} from "./functions/local/loadLocalRootElem";
import {elemRefresh} from "./functions/elemRefresh";
import {querySchemaRun} from "./functions/querySchemaRun";
import {querySchemaToQuery} from "./functions/querySchemaToQuery";
import {createLocalElem} from "./functions/local/createLocalElem";
import {localIndexeddbInit} from "./functions/local/localIndexeddbInit";
import {getRootElem} from "./ResultData/getRootElem";
import {getAllLocalUserStoreDocIds} from "./functions/getAllLocalUserStoreDocIds";
import {setSelectedResultIds} from "./functions/setSelectedResultIds";
import {pathToObjectConverter} from "./functions/generic/pathToObjectConverter";
import {objectModificationCompare} from "./functions/generic/objectModificationCompare";
import {srcUpdateTasksGenerator} from "./functions/srcUpdateTasksGenerator";

export let layrCoreCommands = {

    //yx Init
    localIndexeddbInit,

    //yx load page
    loadLocalRootElem,
    createLocalElem,
    getRootElem,

    //yx running page elems
    elemRefresh,

    //yx other functions
    setSelectedResultIds,
    getAllLocalUserStoreDocIds,
    pathToObjectConverter,
    querySchemaRun,
    querySchemaToQuery,

    //yx unused
    objectModificationCompare: objectModificationCompare,
    srcQueryTaskGenerator: srcUpdateTasksGenerator,

    //yx uncategorised


}
layrCoreCommands.pathToObjectConverter([{path: ["a", "b", "c"], object: {zz: "uj"}}, {
    path: ["o", "k"],
    object: "gg"
}], {kk: "zu"})