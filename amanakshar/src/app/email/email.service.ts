import { EmailModel } from './email.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class EmailService {

  private baseUrl = 'http://localhost:8080';
  constructor(private http: Http) { }

  postMail(emailModel: EmailModel) {
    return this.http.post(this.baseUrl + '/api/mail/', emailModel);
  }
}
