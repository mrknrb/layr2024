import {QueryObject} from "./types/queryObject";
import {omf} from "../lib/omf";
import {querySources} from "./querySources/querySources";
import {MrkErrCategories, mrkErrNew} from "../lib/MrkErr";


export async function layrQueryRun(query: QueryObject<any>) {
    if (!query || !query.type || !query.requestData) return mrkErrNew({
        ErrCategory: MrkErrCategories.InvalidInputs,
        MrkErrDescription: "Invalid query inputs"
    })
    let queryRunFunction = omf.get(querySources, query.type)
    if (!queryRunFunction) return mrkErrNew({
        ErrCategory: MrkErrCategories.CantFindItem,
        MrkErrDescription: "No  such query Type!"
    })
    return await queryRunFunction(query.requestData)


}