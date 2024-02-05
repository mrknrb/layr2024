import {QuerySourceLocalSubTypesCreate} from "./querySourceLocalSubTypesCreate";
import {QuerySourceLocalSubTypesGet} from "./querySourceLocalSubTypesGet";
import {omf} from "../../../lib/omf";
import {querySourceLocalRequestSchema} from "./querySourceLocalRequestSchema";
import Dexie from "dexie";
import {crudEnums} from "../../types/crudEnums";
import {querySourceLocalSubTypeEnums} from "./querySourceLocalSubTypeEnums";
import {omap} from "../../../lib/omap";
import {QuerySourceLocalSubTypesUpdate} from "./querySourceLocalSubTypesUpdate";


export let querySourceLocalSubTypesAll = omf.setLot(omf.create<omap<(data: querySourceLocalRequestSchema) => any, querySourceLocalSubTypeEnums>, crudEnums>(), [{
        key: crudEnums.get,
        object: QuerySourceLocalSubTypesGet
    }, {
        key: crudEnums.create,
        object: QuerySourceLocalSubTypesCreate
    }, {
        key: crudEnums.update,
        object: QuerySourceLocalSubTypesUpdate
    }]
)