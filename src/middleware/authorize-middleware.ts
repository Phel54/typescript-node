import apiResponse from '../util/apiResponse';
import {NextFunction, Request, Response,} from 'express';

const authorizeRoles = (...permittedRoles: string[]) => {
    return (req:Request, res:Response, next: NextFunction) => {
        const payload:any = req.decoded
        console.log('Payload:', payload)
        console.log('permittedRoles: ', ...permittedRoles)
        if (
            (payload && permittedRoles.includes(payload.role)) ||
            (payload && permittedRoles.includes(payload.isSuperAdmin))
        ) {
            //console.log("payload:",payload.merchantID);
            next() // role is allowed, so continue on the next middleware
        } else {
            let error = 'Unauthorized Access'
            return apiResponse.unauthorizedResponse(res, error) // user is forbidden
        }
    }
   
}



export {authorizeRoles}
