import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
         ): Observable <HttpEvent<any>> {
            //  modify the outgoing request
             const modifiedReq = req.clone({
                 withCredentials: true
             });
             return next.handle(modifiedReq);
            //  watch for events around a request
            //  .pipe(
            //      tap((val)=>{
            //        if(val.type === HttpEventType.Sent) {
            //            console.log('request was sent to server')
            //        }
            //        if(val.type === HttpEventType.Response) {
            //            console.log('GOT A RESPONSE FROM THE API', val)
            //        }
            //      })
            //  )
    }
    }

