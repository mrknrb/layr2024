import {ElemTypes} from "../elems/ElemTypes";
import {crudEnums} from "../../layrQuery/types/crudEnums";
import {QueryEnums} from "../../layrQuery/types/queryEnums";
import {querySourceLocalSubTypeEnums} from "../../layrQuery/querySources/local/querySourceLocalSubTypeEnums";

import {omf} from "../../lib/omf";
import {ResultFull} from "../ResultData/ResultFull";
import {ResultTypes} from "../ResultData/ResultTypes";
import {ElemGroupSave} from "../elems/elemGroup/ElemGroupSave";
import {ElemGroupDynamic} from "../elems/elemGroup/ElemGroupDynamic";
import {DBStoreDocNames} from "../DBStoreDocNames";
import {QuerySchema} from "../src/querySchema";
import {querySourceLocalRequestType} from "../../layrQuery/querySources/local/querySourceLocalRequestType";
import {srcActionDefaultNames} from "../src/srcActionDefaultNames";
import {ElemFormatsEnums} from "../../layrUI/views/comps/pageView/elemUIs/elemFormatsEnums";

// --- A localra mentett elem-ek parentje, így tudod kezelni és szerkeszteni ---
export function RootResultFullFactory_LocalParent(rootDocId: string): ResultFull<ElemGroupSave, ElemGroupDynamic> {
    let q1: QuerySchema<querySourceLocalRequestType> = {
        sourceType: QueryEnums.local,
        requestDataStatic: {
            crudEnum: crudEnums.get,
            docId: rootDocId,
            dbId: DBStoreDocNames.dbLayr,
            storeId: DBStoreDocNames.storeUser,
            subType: querySourceLocalSubTypeEnums.docObject
        }
    }
    let q2: QuerySchema<querySourceLocalRequestType> = {
        sourceType: QueryEnums.local,
        requestDataStatic: {
            crudEnum: crudEnums.update,
            docId: rootDocId,
            subType: querySourceLocalSubTypeEnums.docObject,
            dbId: DBStoreDocNames.dbLayr,
            storeId: DBStoreDocNames.storeUser
        }
    }
    return {
        resultType: ResultTypes.layrElem,
        resultId: "0",

        resultSave: {
            elemFormat: omf.create({[ElemFormatsEnums.fullScreen]: ""}),
            elemType: ElemTypes.group,
            srcPointers: {elems: "0"},
            srcSaveList: omf.set(omf.create(), "0", {
                resultType: ResultTypes.layrElem,
                srcActionList: [{
                    resultRootPath: [], srcActionName: srcActionDefaultNames.get, querySchema: q1, queryRootPath: []

                }, {
                    resultRootPath: [],
                    srcActionName: srcActionDefaultNames.update,
                    querySchema: q2,
                    queryRootPath: ["newData"]

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