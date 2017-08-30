import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AppService {

  headers: Headers;
  options: RequestOptions;
  public url = 'http://34.210.64.146/api/v1';

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  //to show the loader
  show() {
    document.getElementById("loader-wrapper").style.display = "block";
  };

  //to hide the loader
  hide() {
    document.getElementById("loader-wrapper").style.display = "none";
  };

  makeRequestWithAction(params, action): Observable<any> {
    let body = JSON.stringify(params);
    return this.http
      .post(this.url + action, body, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // make request with no parameters
	makeGetWithAction(action) {
		return this.http.get(this.url + action, this.options)
			.map(res => res.json());
	}

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}