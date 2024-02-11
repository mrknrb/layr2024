import {QuerySchema} from "./querySchema";
import {srcActionDefaultNames} from "./srcActionDefaultNames";

export interface SrcActionType {
    querySchema: QuerySchema,
    srcActionName: srcActionDefaultNames | string,// lehet barmi, ez lesz a neve
    resultRootPath: string[],//milyen resultpathre vonatkozik a query. minel konretabb, annal nagyobb prioritas
    queryRootPath: string[]//a querybe hova illessze be az update adatait
}