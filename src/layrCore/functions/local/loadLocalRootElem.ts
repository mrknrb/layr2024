import {RootResultFullFactory_LocalParent} from "../../static/RootResultFullFactory_LocalParent";
import {loadResultFullAllElemsAllPointers} from "../../ResultData/loadResultFullAllElemsAllPointers";
import {newResultFull} from "../../ResultData/newResultFull";
import {ResultTypes} from "../../ResultData/ResultTypes";
import {MrkLib} from "../../../lib/MrkLib";
import {omf} from "../../../lib/omf";
import {loadRecursivelyResultFullElem} from "../../ResultData/loadRecursivelyResultFullElem";
import {layrCoreStoreUpdater} from "../../LayrCoreStore";

export async function loadLocalRootElem(localElemId: string) {

    await layrCoreStoreUpdater.updateStore((storeCopy, storeUpdatedResult) => {
        storeCopy.resultFullDataArray = []
        storeUpdatedResult(storeCopy)

    })
    let rootElem = RootResultFullFactory_LocalParent(localElemId)//layrCoreStore.RootUrl
    await newResultFull(rootElem)

    await loadRecursivelyResultFullElem(rootElem)


}