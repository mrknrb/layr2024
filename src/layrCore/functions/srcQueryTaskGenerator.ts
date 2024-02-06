import {objectModificationDifference} from "./objectModificationCompare";
import {SrcSave} from "../src/srcSave";

export function srcQueryTaskGenerato(diffArray: objectModificationDifference[], srcSave: SrcSave) {
    //minden differencere kikeresni a megfelelo srcpartot es az input data pathet berakni
    //ha ugyanaz a query kettore is jo, akkor ne futtasd ketszer, hanem egyesitsd
    //ha vmire nincs querytask, akkor azt jelezd hibakent
    let queryTasks: { srcSave: SrcSave }[] = []

    let ArrayIndex = 0

    diffArray.forEach(diff => {
        let srcPartBest
        srcSave.srcParts.forEach(srcpart => {
            if (comparison(srcpart.queryRootPath, diff.path)) {
                // If the path2 is equal or deeper than path1, add it to the result


            }
        })


    })

}

function comparison(srcpartPath: string[], differencepath: string[]) {
    srcpartPath.forEach((value, index) => {


    })


}

export function srcQueryTaskGenerator(pathArray1: string[][], pathArray2: string[][]): string[][] {
    const result: string[][] = [];

    for (const path1 of pathArray1) {
        for (const path2 of pathArray2) {
            if (isPathEqualOrDeeper(path2, path1)) {
                // If the path2 is equal or deeper than path1, add it to the result
                result.push(path2);
            }
        }
    }

    return result;
}

function isPathEqualOrDeeper(pathToCheck: string[], referencePath: string[]): boolean {
    // Compare each level of the paths
    for (let i = 0; i < referencePath.length; i++) {
        if (i >= pathToCheck.length || pathToCheck[i] !== referencePath[i]) {
            // If any level differs, or the pathToCheck is shorter, it's not equal or deeper
            return false;
        }
    }

    // If all levels match and pathToCheck is at least as long as referencePath, it's equal or deeper
    return true;
}
