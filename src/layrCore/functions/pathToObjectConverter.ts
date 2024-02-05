export function pathToObjectConverter(pathsObjects: { path: string[], object: any }[], originalObject?: object) {
    
    let objectNew: any = {}
    if (originalObject !== undefined) objectNew = originalObject
    pathsObjects.forEach(pathData => {

        let recursive = (object: any, pathNumber: number) => {

            let objField = pathData.path[pathNumber]
            if (pathData.path[pathNumber] === undefined) {
                object = pathData.object
            } else if (pathData.path[pathNumber + 1] !== undefined) {

                if (object[objField] === undefined) object[objField] = {}
                recursive(object[objField], pathNumber + 1)
            } else {
                object[objField] = pathData.object

            }

        }
        recursive(objectNew, 0)

    })

    return objectNew
}