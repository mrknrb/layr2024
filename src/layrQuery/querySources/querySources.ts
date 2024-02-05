import {querySourceLocal} from "./local/querySourceLocal";
import {omf} from "../../lib/omf";
import {QueryEnums} from "../types/queryEnums";
import {queryRunFunction} from "../types/queryRunFunction";


export let querySources = omf.create<queryRunFunction, QueryEnums>()
omf.setLot(querySources, [
    {key: QueryEnums.local, object: querySourceLocal}

])
