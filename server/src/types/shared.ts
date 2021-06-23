/*
 Containing all the types and interface that is common
 and shared by many of the modules. 
*/

/* User object interface */
export interface IReqUser {
    token: string;
}

/* Response object interface, always use this interface for 
   creating the response object.  */
export interface IResponse<T> {
    succcess: boolean;
    errorMsg: string;
    successMsg: string;
    response: T | undefined;
}

/* Service layer response object interface
   this object will be used by service layer
   to return a response to controller layer*/
export interface IServiceResponse<T> {
    success: boolean;
    internalError: boolean;
    errMsg: string;
    response: T | undefined;
}