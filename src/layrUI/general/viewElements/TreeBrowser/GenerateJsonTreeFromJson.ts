import {MrkLib} from "../../../../lib/MrkLib";
import {JsonDataTree} from "./JsonDataTree";
import {object} from "zod";

export function generateJsonTreeFromJson(JsonArg: any): JsonDataTree[] {
    let jsonDataTree: JsonDataTree[] = []

    if (!JsonArg) return jsonDataTree;

    loop(JsonArg, jsonDataTree);

    function loop(Json: any, jsonDataTreeActual: JsonDataTree[]) {
        MrkLib.forEachInObject(Json, (jsonChild, jsonChildKey) => {
            // Create a new JsonDataTree object for each child
            let childNode: JsonDataTree = {
                name: jsonChildKey,
                children: [],
            };

            if (MrkLib.checkIfObjectOrArray(jsonChild)) {
                // Recursively call loop for child
                loop(jsonChild, childNode.children);
            } else {
                // Update the primitiveData property for leaf nodes
                childNode.primitiveData = jsonChild;
            }

            // Add the childNode to the current jsonDataTreeActual
            jsonDataTreeActual.push(childNode);
        });
    }

    return jsonDataTree;
}