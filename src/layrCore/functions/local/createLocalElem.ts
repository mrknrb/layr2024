import {querySourceLocalRequestType} from "../../../layrQuery/querySources/local/querySourceLocalRequestType";
import {querySourceLocalSubTypeEnums} from "../../../layrQuery/querySources/local/querySourceLocalSubTypeEnums";
import {layrCoreStore} from "../../LayrCoreStore";
import {crudEnums} from "../../../layrQuery/types/crudEnums";
import {layrQueryCommands} from "../../../layrQuery/layrQueryCommands";
import {QueryEnums} from "../../../layrQuery/types/queryEnums";
import {DBStoreDocNames} from "../../DBStoreDocNames";
import {ResultTypes} from "../../ResultData/ResultTypes";
import {MrkLib} from "../../../lib/MrkLib";
import {omf} from "../../../lib/omf";
import {ElemBaseSave} from "../../elems/elemBase/ElemBaseSave";

// ---Letrehoz egy local layr page-et---
export async function createLocalElem() {
    let localreqdoc: querySourceLocalRequestType<ElemBaseSave> = {
        subType: querySourceLocalSubTypeEnums.doc,
        dbId: DBStoreDocNames.dbLayr,
        storeId: DBStoreDocNames.storeUser,
        crudEnum: crudEnums.create,
        newData: {

            elemFormat: {},
            srcSaveList: omf.set(omf.create(), "0", {
                resultType: ResultTypes.layrElem,
                srcActionList:
                    [{
                        queryRootPath: [], srcActionName: crudEnums.create, resultRootPath: [], querySchema: {}

                    }, {
                        queryRootPath: [], srcActionName: crudEnums.update, resultRootPath: [], querySchema: {}

                    }
                    ]
            })

        }
    }
    await layrQueryCommands.run({
        type: QueryEnums.local,
        requestData: localreqdoc
    })


}