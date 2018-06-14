import {Injectable} from '@angular/core';
import {
    HttpInterceptor, 
    HttpHandler, 
    HttpRequest,
    HttpHeaders,
    HttpEventType,
    HttpEvent
} from '@angular/common/http';
//import {Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
//import { mergeMap } from 'rxjs/operators/mergeMap';

import {EZCodeAdalService} from './ezcode-adal.service';


@Injectable()
export class EZCodeHttpInterceptor implements HttpInterceptor {

  constructor(private auth: EZCodeAdalService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    //return next.handle(req);
      return this.auth.getAccessTokenByUrl(req.url)
          .mergeMap(token => {
              const authReq = token==null?req.clone(): req.clone({
                  headers: req.headers.set('Authorization', "Bearer " + token)
              });
              return next.handle(authReq);
          });
    
  }
}