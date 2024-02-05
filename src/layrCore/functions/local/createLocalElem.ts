import {querySourceLocalRequestSchema} from "../../../layrQuery/querySources/local/querySourceLocalRequestSchema";
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
    let localreqdoc: querySourceLocalRequestSchema<ElemBaseSave> = {
        subType: querySourceLocalSubTypeEnums.doc,
        dbId: DBStoreDocNames.dbLayr,
        storeId: DBStoreDocNames.storeUser,
        crudEnum: crudEnums.create,
        newData: {

            elemFormat: {},
            srcSaveList: omf.set(omf.create(), "0", {
                resultType: ResultTypes.layrElem,
                srcParts:
                    [{
                        path: [], crudEnum: crudEnums.create, querySchema: "test"

                    }, {
                        path: [], crudEnum: crudEnums.update, querySchema: "test"

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