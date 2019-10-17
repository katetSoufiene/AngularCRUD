import { IPolicy } from './../models/policy.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class PoliciesService {
   // baseUrl = 'http://localhost:5000/policies';
     baseUrl = 'http://localhost:3000/policies';
    constructor(private httpClient: HttpClient) { }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }
        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }

    getPolicies(): Observable<IPolicy[]> {
        return this.httpClient.get<IPolicy[]>(this.baseUrl);
    }

    getPolicy(id: number): Observable<IPolicy> {
        return this.httpClient.get<IPolicy>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    addPolicy(policy: IPolicy): Observable<IPolicy> {
        return this.httpClient.post<IPolicy>(this.baseUrl, policy, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(catchError(this.handleError));
    }

    updatePolicy(policy: IPolicy): Observable<void> {
        return this.httpClient.put<void>(`${this.baseUrl}/${policy.id}`, policy, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(catchError(this.handleError));
    }

    deletePolicy(id: number): Observable<IPolicy> {
        return this.httpClient.delete<IPolicy>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }
}
