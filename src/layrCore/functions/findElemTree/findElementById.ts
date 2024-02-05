import {LayrStoreType} from "../../LayrCoreStore";
import {ResultFull} from "../../ResultData/ResultFull";
import {ElemGroupDynamic} from "../../elems/elemGroup/ElemGroupDynamic";

export function findElementById(store: LayrStoreType, elemId: string) {
    if (!store.resultFullDataArray) return
    if (store.resultFullDataArray?.elemId === elemId) return store.resultFullDataArray
    loop(store.resultFullDataArray)

    function loop(element: ElemGroupDynamic): ElemGroupDynamic | undefined {
        if (!element || !element.childrenElemsDynamic) return
        for (const childElement of element.childrenElemsDynamic) {
            let childelemframe: ElemGroupDynamic | undefined = undefined

            if (childElement) childelemframe = childElement as ElemGroupDynamic
            if (!childelemframe) {
                return undefined
            }
            if (childelemframe.elemId === elemId) {
                return childElement; // Element with the right ID found
            }

            // If the current element has nested arrays, recursively search through them
            if (Array.isArray(childelemframe.childrenElemsDynamic)) {
                const nestedResult = loop(childelemframe);
                if (nestedResult !== null) {
                    return nestedResult; // Element found in nested arrays
                }
            }
        }

        return undefined; // Element with the specified ID not found
    }

    /* if (!store.elementTree || !elemId) return
     let foundElem: ElemTreeDataDynamic | undefined = undefined

     elemLoop(store.elementTree)

     function elemLoop(actualElem: ElemGroupDynamic) {
         if (foundElem) return
         let i = -1
         if (!actualElem) return
         if (actualElem.elemId === elemId) {
             foundElem = actualElem
             return
         }

         if (actualElem.childrenElemsDynamic) {
             elemLoop(actualElem.childrenElemsDynamic[i++])

         }
         if (actualElem.childrenElemsDynamic[i]) return

     }

     return foundElem*/


}

