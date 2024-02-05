import {layrQueryCommands} from "../layrQuery/layrQueryCommands";
import {QueryEnums} from "../layrQuery/types/queryEnums";
import {querySourceLocalRequestSchema} from "../layrQuery/querySources/local/querySourceLocalRequestSchema";
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
        let localreqdb: querySourceLocalRequestSchema = {
            crudEnum: crudEnums.create, newData: testdata.db,
            subType: querySourceLocalSubTypeEnums.database
        }
        console.log("1. create local db", await layrQueryCommands.run({
            type: QueryEnums.local,
            requestData: localreqdb
        }))
        //rendben

        let localreqtable: querySourceLocalRequestSchema = {
            dbId: testdata.db, crudEnum: crudEnums.create, newData: testdata.store,
            subType: querySourceLocalSubTypeEnums.store
        }
        console.log("2. create local table", await layrQueryCommands.run({
            type: QueryEnums.local,
            requestData: localreqtable
        }))

        let localreqdoc: querySourceLocalRequestSchema = {
            subType: querySourceLocalSubTypeEnums.doc,
            dbId: testdata.db,
            crudEnum: crudEnums.create,
            storeId: testdata.store,
            newData: {test: testdata.doc, db: testdata.db}
        }
        console.log("3. create local doc", await layrQueryCommands.run({
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
    let localreqdb: querySourceLocalRequestSchema = {
        subType: querySourceLocalSubTypeEnums.database,
        crudEnum: crudEnums.get
    }
    console.log("1. get local dbs", await layrQueryCommands.run({type: QueryEnums.local, requestData: localreqdb}))


    let localreqtable: querySourceLocalRequestSchema = {
        subType: querySourceLocalSubTypeEnums.store,
        dbId: testdata.db, crudEnum: crudEnums.get
    }
    console.log("2. get local stores", await layrQueryCommands.run({
        type: QueryEnums.local,
        requestData: localreqtable
    }))
    let localreqdoc: querySourceLocalRequestSchema = {
        subType: querySourceLocalSubTypeEnums.doc,
        dbId: testdata.db, crudEnum: crudEnums.get, storeId: testdata.store
    }
    console.log("3. get local docs", await layrQueryCommands.run({type: QueryEnums.local, requestData: localreqdoc}))
    let localreqdocObject: querySourceLocalRequestSchema = {
        subType: querySourceLocalSubTypeEnums.docObject,
        dbId: testdata.db, crudEnum: crudEnums.get, storeId: testdata.store, docId: 1
    }
    console.log("4. get local docobject", await layrQueryCommands.run({
        type: QueryEnums.local,
        requestData: localreqdocObject
    }))


}
