export function GetToken():string{
    const data = localStorage.getItem("token")
    const token = data? JSON.parse(data): ""
    return token
}
export function SetToken(token:string):void{
    localStorage.setItem("token",token)
}
export function RemoveToken():void{
    localStorage.removeItem("token")
}