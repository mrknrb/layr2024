import {omf} from "../../../lib/omf";
import {querySourceLocalSubTypeEnums} from "./querySourceLocalSubTypeEnums";
import {querySourceLocalRequestType} from "./querySourceLocalRequestType";
import {string} from "zod";
import Dexie from "dexie";

export let QuerySourceLocalSubTypesUpdate = omf.setLot(omf.create<(data: querySourceLocalRequestType) => any, string>(), [{
    key: querySourceLocalSubTypeEnums.database,
    object: async (arg: querySourceLocalRequestType) => {


    }
}, {
    key: querySourceLocalSubTypeEnums.store,
    object: async (arg: querySourceLocalRequestType) => {
        const myPromise = new Promise((resolve, reject) => {

        })
        return await myPromise
    }
}, {
    key: querySourceLocalSubTypeEnums.doc,
    object: async (arg: querySourceLocalRequestType) => {

    }
}, {
    key: querySourceLocalSubTypeEnums.docObject,
    object: async (arg: querySourceLocalRequestType) => {

        return new Promise((resolve, reject) => {
            
            // Open the database
            var request = window.indexedDB.open(arg.dbId);

            // Handle success event
            request.onsuccess = function (event) {
                var db = event.target.result;

                // Open a transaction and get the object store
                var transaction = db.transaction([arg.storeId], "readwrite");
                var objectStore = transaction.objectStore(arg.storeId);

                // Retrieve the document by key
                var getRequest = objectStore.get(arg.docId);

                getRequest.onsuccess = function (event) {
                    var existingData = getRequest.result;

                    // Update the document with the new data
                    for (var prop in arg.newData) {
                        existingData[prop] = arg.newData[prop];
                    }

                    // Put the updated document back into the object store
                    var putRequest = objectStore.put(arg.newData, arg.docId);

                    putRequest.onsuccess = function (event) {
                        // Update successful
                        resolve(arg.newData);
                        db.close()
                    };

                    putRequest.onerror = function (event) {
                        // Handle error during update
                        db.close()
                    };
                };

                getRequest.onerror = function (event) {
                    // Handle error if document retrieval fails
                    resolve(arg.newData);
                    db.close()
                };

                // Close the transaction and database connection
                transaction.oncomplete = function () {
                    db.close();
                };
            };

            // Handle error event during database open
            request.onerror = function (event) {
                resolve(arg.newData);
            };
        })


    }


}])