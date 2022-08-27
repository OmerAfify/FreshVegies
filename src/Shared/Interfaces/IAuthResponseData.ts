export interface IRegisterResponseData{
idToken	:string,
email:string,
refreshToken:string,
expiresIn:string,
localId	:string
}

export interface ILoginResponseData extends IRegisterResponseData {

    registered:boolean
}