import {reconcile, SetStoreFunction} from "solid-js/store"
import {TypedEvent} from "./TypedEvents";

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

            this.onChange.emit(this.storeGet)
        });

    }

    onChange: TypedEvent<storeGet> = new TypedEvent()


}