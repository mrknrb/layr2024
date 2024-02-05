import {ElemTypes} from "../elems/ElemTypes";
import {crudEnums} from "../../layrQuery/types/crudEnums";
import {QueryEnums} from "../../layrQuery/types/queryEnums";
import {querySourceLocalSubTypeEnums} from "../../layrQuery/querySources/local/querySourceLocalSubTypeEnums";

import {omf} from "../../lib/omf";
import {ElemBaseDynamic} from "../elems/elemBase/ElemBaseDynamic";
import {ResultFull} from "../ResultData/ResultFull";
import {ElemBaseSave} from "../elems/elemBase/ElemBaseSave";
import {ResultTypes} from "../ResultData/ResultTypes";
import {ElemGroupSave} from "../elems/elemGroup/ElemGroupSave";
import {ElemGroupDynamic} from "../elems/elemGroup/ElemGroupDynamic";
import {MrkLib} from "../../lib/MrkLib";
import {DBStoreDocNames} from "../DBStoreDocNames";
import {QuerySchema} from "../queryBundle/querySchema";
import {querySourceLocalRequestSchema} from "../../layrQuery/querySources/local/querySourceLocalRequestSchema";

// --- A localra mentett elem-ek parentje, így tudod kezelni és szerkeszteni ---
export function RootResultFullFactory_LocalParent(rootDocId: string): ResultFull<ElemGroupSave, ElemGroupDynamic> {
    let q1: QuerySchema<querySourceLocalRequestSchema> = {
        sourceType: QueryEnums.local, requestDataStatic: {
            crudEnum: crudEnums.get, docId: rootDocId, dbId: DBStoreDocNames.dbLayr,
            storeId: DBStoreDocNames.storeUser,
            subType: querySourceLocalSubTypeEnums.docObject
        }
    }
    let q2: QuerySchema<querySourceLocalRequestSchema> = {
        sourceType: QueryEnums.local, requestDataStatic: {
            crudEnum: crudEnums.update, docId: rootDocId,
            subType: querySourceLocalSubTypeEnums.docObject, dbId: DBStoreDocNames.dbLayr,
            storeId: DBStoreDocNames.storeUser
        }
    }
    return {
        resultType: ResultTypes.layrElem,
        resultId: "0",

        resultSave: {
            srcPointers: {elems: "0"},
            srcSaveList: omf.set(omf.create(), "0", {
                resultType: ResultTypes.layrElem,
                srcParts:
                    [{
                        path: [], crudEnum: crudEnums.get, querySchema: q1

                    }, {
                        path: [], crudEnum: crudEnums.update, querySchema: q2

                    }
                    ]
            })
        }
    }
}

/*
srcSaveList: omf.set(omf.create(), "0", omf.setLot(omf.create<>(), [{
        key: crudEnums.get,
        object: {
            sourceType: QueryEnums.local, requestDataStatic: {
                crudType: crudEnums.get, docId: rootDocId,
                subType: querySourceLocalSubTypeEnums.docObject
            }
        }
    }, {
        key: crudEnums.update,
        object: {
            sourceType: QueryEnums.local, requestDataStatic: {
                crudType: crudEnums.update, docId: rootDocId,
                subType: querySourceLocalSubTypeEnums.docObject
            }
        }
    },

    ]
))
*/