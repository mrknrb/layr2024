import {loadLocalRootElem} from "../../layrCore/functions/local/loadLocalRootElem";

export function setUrlDocId(newHash: string) {
    window.location.hash = newHash
    loadLocalRootElem(newHash)
}