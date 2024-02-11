import {ElemTypes} from "../layrCore/elems/ElemTypes";
import {omf} from "../lib/omf";
import {QueryEnums} from "../layrQuery/types/queryEnums";
import {crudEnums} from "../layrQuery/types/crudEnums";
import {querySourceLocalSubTypeEnums} from "../layrQuery/querySources/local/querySourceLocalSubTypeEnums";
import {ElemGroupDynamic} from "../layrCore/elems/elemGroup/ElemGroupDynamic";

export let elementTreeExample: ElemGroupDynamic = {
    frameId: "0", srcResults: {},


    resultSave: {
        childrenElemsSave: [{
            elemType: ElemTypes.frame,
            ownSrcIds: {
                elemDataSourceType: SrcTypes.queryBundle,
                queryBundleID: "",
                elemPath: ["../"],
                JSONPath: []
            }
        }],
        elemFormat: {autoInvisible: false},
        elemType: ElemTypes.frame,
        srcSaveList: omf.create({
            JSONPath: [],
            querySchema: {
                sourceType: QueryEnums.local, requestDataStatic: {
                    srcActionType: crudEnums.get, storeId: rootIds.storeId, docId: rootIds.docId, dbId: rootIds.dbId,
                    subType: querySourceLocalSubTypeEnums.docObject
                }
            },
            srcActionType: crudEnums.get,
        })

    }

}