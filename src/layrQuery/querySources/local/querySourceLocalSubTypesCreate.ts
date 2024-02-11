import {omf} from "../../../lib/omf";
import {querySourceLocalSubTypeEnums} from "./querySourceLocalSubTypeEnums";
import {querySourceLocalRequestType} from "./querySourceLocalRequestType";
import {string} from "zod";
import Dexie from "dexie";
import * as localforage from "localforage";
import {MrkLib} from "../../../lib/MrkLib";

export let QuerySourceLocalSubTypesCreate = omf.setLot(omf.create<(data: querySourceLocalRequestType) => any, querySourceLocalSubTypeEnums>(), [{
    key: querySourceLocalSubTypeEnums.database,
    object: async (arg: querySourceLocalRequestType) => {

        return new Promise((resolve, reject) => {
            const request = indexedDB.open(arg.newData, 1);

            request.onupgradeneeded = function (event) {
                const db = event.target.result;
                console.log(`IndexedDB '${arg.newData}' created.`);
                db.close()
                resolve(db);
            };

            request.onerror = function (event) {
                const db = event.target?.result;
                db?.close()
                reject(event.target.error);

            };
            request.onsuccess = function (event) {
                const db = event.target.result;
                // console.log(`IndexedDB '${arg.newData}' already exists.`);
                db.close()
                resolve(db);
            };
        });

    }
}, {
    key: querySourceLocalSubTypeEnums.store,
    object: async (arg: querySourceLocalRequestType) => {

        const request = await indexedDB.databases();
        return new Promise<void>((resolve, reject) => {

            let databaseData = request.find((database) => {
                return database.name === arg.dbId
            })
            if (!databaseData) databaseData = {}
            if (!databaseData.version) databaseData.version = 1

            let OpenReq = indexedDB.open(arg.dbId, databaseData.version + 1);

            OpenReq.onupgradeneeded = function (e) {

                let db = e.target.result;
                db.objectStoreNames.contains(arg.newData) || db.createObjectStore(arg.newData, {

                    autoIncrement: true
                });
                db.close()
                resolve(db)
            }
            OpenReq.onsuccess = function (e) {
                e.target.result.close()
            }
            OpenReq.onerror = function (e) {
                e.target?.result?.close()

            }
        });


    }
}, {
    key: querySourceLocalSubTypeEnums.doc,
    object: async (arg: querySourceLocalRequestType) => {
        return new Promise((resolve, reject) => {
            const request = window.indexedDB.open(arg.dbId);

            request.onsuccess = (event) => {
                const db = event.target.result;
                const transaction = db.transaction(arg.storeId, 'readwrite');
                const store = transaction.objectStore(arg.storeId);

                const addRequest = store.add(arg.newData, MrkLib.generateShortId());

                addRequest.onsuccess = () => {
                    db.close();
                    resolve()
                }

                addRequest.onerror = (event) => {
                    reject(event.target.error);
                };

                transaction.oncomplete = () => {
                    db.close();
                };
            };

            request.onerror = (event) => {
                reject(event.target.error);
            };
        });
    }
}])