export function mrkErrNew(newError: MrkErrClass, previousError?: MrkErrClass): MrkErrClass {
    let error = new MrkErrClass(newError)
    if (previousError) {
        error.MrkErrPrevious = previousError

    }


    return error
}

export function mrkErrTest(error: MrkErrClass): boolean {

    return error instanceof MrkErrClass;

}


export enum MrkErrCategories {
    CantFindItem = "CantFindItem",
    InvalidInputs = "InvalidInputs",
}

class MrkErrClass {
    constructor(mrkErrType: MrkErrClass) {

        Object.assign(this, mrkErrType);

    }

    error ? = new Error()
    MrkErrDescription?: string
    ErrCategory!: MrkErrCategories
    MrkErrPrevious?: MrkErrClass
}
