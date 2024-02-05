import {QueryObject} from "./types/queryObject";
import {omf} from "../lib/omf";
import {querySources} from "./querySources/querySources";
import {queryRunFunction} from "./types/queryRunFunction";

export let layrQueryCommands = {
    async run(query: QueryObject<any>) {
        let queryRunFunction = omf.get<queryRunFunction>(omf.create(querySources), query.type)
        return await queryRunFunction(query.requestData)

    },
    async testSource(query: QueryObject) {


    }

}