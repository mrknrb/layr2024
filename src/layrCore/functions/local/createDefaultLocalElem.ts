import {querySourceLocalRequestType} from "../../../layrQuery/querySources/local/querySourceLocalRequestType";
import {querySourceLocalSubTypeEnums} from "../../../layrQuery/querySources/local/querySourceLocalSubTypeEnums";
import {layrCoreStore} from "../../LayrCoreStore";
import {crudEnums} from "../../../layrQuery/types/crudEnums";
import {layrQueryRun} from "../../../layrQuery/layrQueryRun";
import {QueryEnums} from "../../../layrQuery/types/queryEnums";
import {DBStoreDocNames} from "../../DBStoreDocNames";
import {ResultTypes} from "../../ResultData/ResultTypes";
import {MrkLib} from "../../../lib/MrkLib";
import {omf} from "../../../lib/omf";
import {ElemBaseSave} from "../../elems/elemBase/ElemBaseSave";
import {omap} from "../../../lib/omap";
import {ElemTypes} from "../../elems/ElemTypes";
import {DefaultPointerEnums} from "../generic/DefaultPointerEnums";
import {QuerySchema} from "../../src/querySchema";
import {srcActionDefaultNames} from "../../src/srcActionDefaultNames";

// ---Letrehoz egy local layr page-et---
export async function createDefaultLocalElem() {
    let q1: QuerySchema<querySourceLocalRequestType> = {
        sourceType: QueryEnums.local,
        requestDataStatic: {
            crudEnum: crudEnums.get,
            docId: "",
            dbId: DBStoreDocNames.dbLayr,
            storeId: DBStoreDocNames.storeUser,
            subType: querySourceLocalSubTypeEnums.docObject
        }
    }
    let q2: QuerySchema<querySourceLocalRequestType> = {
        sourceType: QueryEnums.local,
        requestDataStatic: {
            crudEnum: crudEnums.update,
            docId: "",
            subType: querySourceLocalSubTypeEnums.docObject,
            dbId: DBStoreDocNames.dbLayr,
            storeId: DBStoreDocNames.storeUser
        }
    }
    let localreqdoc: querySourceLocalRequestType<omap<ElemBaseSave>> = {


        subType: querySourceLocalSubTypeEnums.doc,
        dbId: DBStoreDocNames.dbLayr,
        storeId: DBStoreDocNames.storeUser,
        crudEnum: crudEnums.create,
        newData:
            omf.set(omf.create(), MrkLib.generateShortId(), {
                elemFormat: omf.create(),
                elemType: ElemTypes.group,
                srcPointers: omf.set(omf.create(), DefaultPointerEnums.elems, "0"),
                srcSaveList: omf.set(omf.create(), "0", {
                    resultType: ResultTypes.layrElem,
                    srcActionList:
                        [{
                            queryRootPath: [],
                            srcActionName: srcActionDefaultNames.get,
                            resultRootPath: [],
                            querySchema: q1

                        }, {
                            queryRootPath: ["newData"],
                            srcActionName: srcActionDefaultNames.update,
                            resultRootPath: [],
                            querySchema: q2

                        }
                        ]
                })
            })

    }
    await layrQueryRun({
        type: QueryEnums.local,
        requestData: localreqdoc
    })


}