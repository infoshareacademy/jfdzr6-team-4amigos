export const validationMessage = (email) =>{
    let errorMessage = ""
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!reg.test(email)) {
        errorMessage = "Podany email jest niepoprawny"
    }

    return errorMessage
}