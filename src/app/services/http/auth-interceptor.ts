import { BaseService } from 'src/app/services/base/base.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private base: BaseService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token: string = this.base.getHandleStorageData('token')
    let headers = new HttpHeaders();
    headers = headers.set('token', token);
    const authReq = req.clone({ headers: headers });
    return next.handle(authReq);
  }
}
