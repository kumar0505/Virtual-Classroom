// import { IUser } from "../models/User"

// const enum Operations {ADD, READ}

// export interface Roles {
//     name : string,
//     access:Operations,
//     privilegeNo : number
// };

// export interface UserAccess {
//     accessType:string,
//     privilege:string
// }

// const Admin : Roles = {
//     name : 'Admin',
//     access : Operations.ADD,
//     privilegeNo : 0
// }

// const User : Roles = {
//     name : 'User',
//     access:Operations.ADD,
//     privilegeNo : 1
// }

// const User_Read : Roles = {
//     name : 'User_Read',
//     access : Operations.READ,
//     privilegeNo : 2
// }

// function canAccess(role : Roles, user:UserAccess) : boolean{
//     let name = user.accessType;
//     let access = user.privilege;
//     let privilegeNo : number = -1;

//     switch (true) {
//         case (name === 'ADMIN' && access === 'ADD' ):
//             privilegeNo = 0;
//             break;
//         case (name === 'USER' && access === 'ADD' ):
//             privilegeNo = 1;
//             break;
//         case (name === 'USER' && access === 'READ' ):
//             privilegeNo = 2;
//             break;
//         default:
//             break;
//     }

//     if(privilegeNo === -1){
//         return false;
//     }
//     else if(privilegeNo <= role.privilegeNo){
//         return true;
//     }
//     else{
//         return false
//     }
// }

// export const RBAC = {
//     Admin,
//     User,
//     User_Read,
//     canAccess
// }