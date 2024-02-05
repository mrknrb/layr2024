import {loadLocalRootElem} from "./functions/local/loadLocalRootElem";
import {elemRefresh} from "./functions/elemRefresh";
import {querySchemaRun} from "./functions/querySchemaRun";
import {querySchemaToQuery} from "./functions/querySchemaToQuery";
import {createLocalElem} from "./functions/local/createLocalElem";
import {localIndexeddbInit} from "./functions/local/localIndexeddbInit";
import {getRootElem} from "./ResultData/getRootElem";
import {getAllLocalUserStoreDocIds} from "./functions/getAllLocalUserStoreDocIds";
import {setSelectedResultIds} from "./functions/setSelectedResultIds";
import {pathToObjectConverter} from "./functions/pathToObjectConverter";
import {objectModificationCompare} from "./functions/objectModificationCompare";
import {srcQueryTaskGenerator} from "./functions/srcQueryTaskGenerator";

export let layrCoreCommands = {

    //Init
    localIndexeddbInit,
    //local
    createLocalElem,
    loadLocalRootElem,
    getAllLocalUserStoreDocIds,
    objectModificationCompare, srcQueryTaskGenerator,
    setSelectedResultIds,
    getRootElem,
    pathToObjectConverter,
    elemRefresh,
    querySchemaRun,
    querySchemaToQuery
}
layrCoreCommands.pathToObjectConverter([{path: ["a", "b", "c"], object: {zz: "uj"}}, {
    path: ["o", "k"],
    object: "gg"
}], {kk: "zu"})