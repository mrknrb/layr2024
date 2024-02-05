import {findJsonPath} from "../layrCore/functions/findElemTree/findJsonPath";
import {findElemByPath} from "../layrCore/functions/findElemTree/findElemByPath";
import {ElemTypes} from "../layrCore/elems/ElemTypes";
import {omf} from "../lib/omf";
import {QueryEnums} from "../layrQuery/types/queryEnums";
import {crudEnums} from "../layrQuery/types/crudEnums";
import {querySourceLocalSubTypeEnums} from "../layrQuery/querySources/local/querySourceLocalSubTypeEnums";
import {ElemGroupDynamic} from "../layrCore/elems/elemGroup/ElemGroupDynamic";

export let layrCoreTests = {

    findJsonPath: () => {
        console.log(findJsonPath({a: {t: {u: "3"}}}, ["a", "t", "u"]))
    },
    findElemByPath: () => {
        let root: ElemGroupDynamic = {
            frameId: "0", srcResults: {},
            childrenElemsDynamic: [],

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
                            crudEnum: crudEnums.get, storeId: "", docId: "", dbId: "",
                            subType: querySourceLocalSubTypeEnums.docObject
                        }
                    },
                    crudEnum: crudEnums.get,
                })

            }

        }
        root.childrenElemsDynamic?.push({
            parentElement: root,
            frameId: "0",
            resultSave: {elemId: "momo", elemType: ElemTypes.group}
        })
        root.childrenElemsDynamic?.push({
            parentElement: root,
            frameId: "0",
            resultSave: {elemId: "ii", elemType: ElemTypes.group}
        })
        let u: ResultFullElementGroup = {
            childrenElemsDynamic: [],
            parentElement: root,
            frameId: "0",
            resultSave: {elemId: "u", elemType: ElemTypes.group}
        }
        root.childrenElemsDynamic?.push(u)
        u.childrenElemsDynamic?.push({
            parentElement: u,
            frameId: "0",
            resultSave: {elemId: "ii", elemType: ElemTypes.group}
        })
        let i = {
            childrenElemsDynamic: [],
            parentElement: u,
            frameId: "0",
            saveData: {elemId: "i", elemType: ElemTypes.group}
        }
        u.childrenElemsDynamic?.push(i)


        console.log(findElemByPath(i, ["../", "../", "u", "i"]))
    }
}