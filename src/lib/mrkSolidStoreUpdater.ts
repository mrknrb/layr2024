import {reconcile, SetStoreFunction} from "solid-js/store"

export class mrkSolidStoreUpdater<storeGet> {
    private storeGet: storeGet
    private storeSet: SetStoreFunction<storeGet>

    constructor(storeGet: storeGet, storeSet: SetStoreFunction<storeGet>) {
        this.storeGet = storeGet
        this.storeSet = storeSet
    }


    async updateStore(callback: (storeCopy: storeGet, storeUpdatedResult: (storeUpdated: storeGet) => void) => void) {
        let storeGetCopy: storeGet = JSON.parse(JSON.stringify(this.storeGet));

        callback(storeGetCopy, (storeUpdated) => {
            if (storeUpdated === undefined) return;
            this.storeSet(reconcile(storeUpdated));

        });


    }
}