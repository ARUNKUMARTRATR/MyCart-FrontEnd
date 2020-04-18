import { ProductModel } from './../models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RequestOptions } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

export class ApiService {
  temp: ProductModel = {
    id: null,
    productId: null,
    productName: null,
    description: null,
    price: null,
    launchDate: null,
    photoUrl: null,
    isAvailable: null,
    isDeleted: null,
    catogoryName: null,
    catogory: null,
    productCart: null,
  };
  init = JSON.stringify(this.temp);
  private messageSource = new BehaviorSubject(this.init);
  currentMessage = this.messageSource.asObservable();
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  private formatErrors(error: any) {
    return throwError(error.error);
  }
  /////////////////////////////////////// GET////////////////////////////////////////////////////////////

  get(path: string, options: RequestOptions): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`, options);
  }

  ////////////////////////////////////////// PUT/////////////////////////////////////////////////////////

  put(
    path: string,
    // tslint:disable-next-line:ban-types
    body: Object = {},
    options: RequestOptions,
  ): Observable<any> {
    return this.http
      .put(`${this.apiUrl}${path}`, body, options)
      .pipe(catchError(this.formatErrors));
  }

  ////////////////////////////////////// POST//////////////////////////////////////////////////////////////

  post(
    path: string,
    // tslint:disable-next-line:ban-types
    body: Object = {},
    options: RequestOptions,
  ): Observable<any> {
    return this.http
      .post(`${this.apiUrl}${path}`, body, options)
      .pipe(catchError(this.formatErrors));
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  postFile(
    path: string,
    // tslint:disable-next-line:ban-types
    body: Object = {},
    options: RequestOptions,
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}${path}`, body, options).pipe(
      map((res: any) => res.data),
      catchError(this.formatErrors),
    );
  }

  /////////////////////////////////////////// DELETE//////////////////////////////////////////////////////

  delete(path: string, options: RequestOptions): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}${path}`, options)
      .pipe(catchError(this.formatErrors));
  }
}
