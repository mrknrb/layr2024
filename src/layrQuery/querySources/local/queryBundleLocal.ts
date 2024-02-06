import {omf} from "../../../lib/omf";
import {omap} from "../../../lib/omap";
import {QuerySchema} from "../../../layrCore/src/querySchema";
import {crudEnums} from "../../types/crudEnums";

export let queryBundleLocal = omf.create<QuerySchema, crudEnums>()
omf.set(queryBundleLocal, "0")