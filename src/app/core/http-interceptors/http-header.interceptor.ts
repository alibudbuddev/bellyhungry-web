import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { AppService } from '@shared/util/app.service';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // var headers = {};

    // headers = {
    //   'Content-Type':  'application/json',
    //   'Accept': 'application/json',
    //   'wnbpk': 'K7j0O2171XUWVc',
    //   'language': this.locale,
    //   'currency': this.appService.currentCurrency.code
    // };

    // if (req.method === 'POST' && req.url.indexOf('/upload') >= 0) {
    //   delete headers['Content-Type'];
    //   delete headers['Accept'];
    // }
    
    // const modifiedRequest = req.clone({
    //   setHeaders: headers,
    //   url: `/${req.url}`
    // });
    // return next.handle(modifiedRequest);
    return next.handle(req);
  }
}