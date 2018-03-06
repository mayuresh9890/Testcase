import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

@Injectable()
export class SessionTimeOutService {

  constructor(private http: Http) {}

  getIP(): Observable<any[]> {
    //return this.http.get('http://ipinfo.io') // ...using post request
    return this.http.get('http://freegeoip.net/json/?callback') // ...using post request
    .map((res:Response) => <any[]>res.json()) // ...and calling .json() on the response to return data
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }
}
