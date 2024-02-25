import {layrQueryRun} from "../layrQuery/layrQueryRun";
import {QueryEnums} from "../layrQuery/types/queryEnums";
import {querySourceLocalRequestType} from "../layrQuery/querySources/local/querySourceLocalRequestType";
import {querySourceLocalSubTypeEnums} from "../layrQuery/querySources/local/querySourceLocalSubTypeEnums";
import {crudEnums} from "../layrQuery/types/crudEnums";

export let queryLocalTest = {
    createtest,
    gettest

}


async function createtest() {
    let testdata = {db: Math.random().toString(), store: Math.random().toString(), doc: Math.random().toString()}
    console.log("-----------------test start------------------------------------------------------------")
    try {
        let localreqdb: querySourceLocalRequestType = {
            srcActionType: crudEnums.create, newData: testdata.db,
            subType: querySourceLocalSubTypeEnums.database
        }
        console.log("1. create local db", await layrQueryRun({
            type: QueryEnums.local,
            requestData: localreqdb
        }))
        //rendben

        let localreqtable: querySourceLocalRequestType = {
            dbId: testdata.db, srcActionType: crudEnums.create, newData: testdata.store,
            subType: querySourceLocalSubTypeEnums.store
        }
        console.log("2. create local table", await layrQueryRun({
            type: QueryEnums.local,
            requestData: localreqtable
        }))

        let localreqdoc: querySourceLocalRequestType = {
            subType: querySourceLocalSubTypeEnums.doc,
            dbId: testdata.db,
            srcActionType: crudEnums.create,
            storeId: testdata.store,
            newData: {test: testdata.doc, db: testdata.db}
        }
        console.log("3. create local doc", await layrQueryRun({
            type: QueryEnums.local,
            requestData: localreqdoc
        }))
    } catch (error) {
        console.error("Error retrieving IndexedDB databases:", error);
    }
    await gettest(testdata)
    console.log("-----------------test end------------------------------------------------------------------")
}

async function gettest(testdata: { db: string, store: string, doc: string }) {
//jo mind
    let localreqdb: querySourceLocalRequestType = {
        subType: querySourceLocalSubTypeEnums.database,
        srcActionType: crudEnums.get
    }
    console.log("1. get local dbs", await layrQueryRun({type: QueryEnums.local, requestData: localreqdb}))


    let localreqtable: querySourceLocalRequestType = {
        subType: querySourceLocalSubTypeEnums.store,
        dbId: testdata.db, srcActionType: crudEnums.get
    }
    console.log("2. get local stores", await layrQueryRun({
        type: QueryEnums.local,
        requestData: localreqtable
    }))
    let localreqdoc: querySourceLocalRequestType = {
        subType: querySourceLocalSubTypeEnums.doc,
        dbId: testdata.db, srcActionType: crudEnums.get, storeId: testdata.store
    }
    console.log("3. get local docs", await layrQueryRun({type: QueryEnums.local, requestData: localreqdoc}))
    let localreqdocObject: querySourceLocalRequestType = {
        subType: querySourceLocalSubTypeEnums.docObject,
        dbId: testdata.db, srcActionType: crudEnums.get, storeId: testdata.store, docId: 1
    }
    console.log("4. get local docobject", await layrQueryRun({
        type: QueryEnums.local,
        requestData: localreqdocObject
    }))


}
