import {omf} from "../../../lib/omf";
import {querySourceLocalSubTypeEnums} from "./querySourceLocalSubTypeEnums";
import {querySourceLocalRequestSchema} from "./querySourceLocalRequestSchema";
import {string} from "zod";
import Dexie from "dexie";

export let QuerySourceLocalSubTypesGet = omf.setLot(omf.create<(data: querySourceLocalRequestSchema) => any, string>(), [{
    key: querySourceLocalSubTypeEnums.database,
    object: async (arg: querySourceLocalRequestSchema) => {

        const request = await indexedDB.databases();

        return request.map(dbInfo => dbInfo.name)


    }
}, {
    key: querySourceLocalSubTypeEnums.store,
    object: async (arg: querySourceLocalRequestSchema) => {
        const myPromise = new Promise((resolve, reject) => {
            if (!arg.dbId) return
            const openRequest = indexedDB.open(arg.dbId)
            openRequest.onsuccess = (event) => {
                const db = event.target.result;
                const transaction = db.transaction(db.objectStoreNames, 'readonly');
                const stores = Array.from(transaction.objectStoreNames);
                db.close()
                resolve(stores);
            };

            openRequest.onerror = (event) => {
                reject(event.target.error);
            };
        })
        return await myPromise
    }
}, {
    key: querySourceLocalSubTypeEnums.doc,
    object: async (arg: querySourceLocalRequestSchema) => {

        return new Promise((resolve, reject) => {
            // Open the database
            console.log(arg)
            const request = window.indexedDB.open(arg.dbId)

            // Handle success
            request.onsuccess = (event) => {
                const db = event.target.result

                // Start a transaction
                const transaction = db.transaction(arg.storeId, 'readonly')

                // Get the object layrCore
                const objectStore = transaction.objectStore(arg.storeId)

                // Retrieve all documents from the object layrCore
                const getAllRequest = objectStore.getAllKeys()

                // Handle success
                getAllRequest.onsuccess = (event) => {
                    const documents = event.target.result
                    resolve(documents)
                }

                // Handle error
                getAllRequest.onerror = (event) => {
                    reject(event.target.error)
                }
                db.close()
            }

            // Handle error
            request.onerror = (event) => {
                reject(event.target.error)
            }

        })


    }
}, {
    key: querySourceLocalSubTypeEnums.docObject,
    object: async (arg: querySourceLocalRequestSchema) => {
        return new Promise((resolve, reject) => {
            // Open a connection to the IndexedDB database
            const request = indexedDB.open(arg.dbId);

            request.onerror = (event) => {
                reject(`Error opening database: ${event.target.error}`);
            };

            request.onsuccess = (event) => {
                const db = event.target.result;

                // Open a transaction to access the specified object layrCore
                const transaction = db.transaction(arg.storeId, 'readonly');
                const store = transaction.objectStore(arg.storeId);

                // Retrieve the document with the specified ID
                const getRequest = store.get(arg.docId);

                getRequest.onsuccess = (event) => {
                    const document = event.target.result;

                    if (document) {
                        resolve(document);
                    } else {
                        console.log(`Document with ID ${arg.docId} not found in store ${arg.storeId}`);
                        resolve(undefined)
                    }

                    // Close the connection to the IndexedDB database
                    db.close();
                };

                getRequest.onerror = (event) => {
                    reject(`Error retrieving document: ${event.target.error}`);
                };
            };

            request.onupgradeneeded = (event) => {
                reject('Database upgrade is needed');

            };
        });


    }
}])