import {QueryEnums} from "../../layrQuery/types/queryEnums";
import {QuerySchema} from "./querySchema";
import {omap} from "../../lib/omap";
import {crudEnums} from "../../layrQuery/types/crudEnums";
import {ResultTypes} from "../ResultData/ResultTypes";

export type SrcSave = {
    resultType: ResultTypes,
    srcParts: {
        querySchema: QuerySchema,
        crudEnum: crudEnums,
        resultRootPath: string[],//milyen resultpathre vonatkozik a query. minel konretabb, annal nagyobb prioritas
        queryRootPath: string[]//a querybe hova illessze be az update adatait
    }[]
}

