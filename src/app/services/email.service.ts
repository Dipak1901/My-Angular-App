import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmailMessage {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emailEndpoint = 'https://formspree.io/f/YOUR_FORMSPREE_ID'; // Replace with your Formspree form ID

  constructor(private http: HttpClient) { }

  sendEmail(message: EmailMessage): Observable<any> {
    return this.http.post(this.emailEndpoint, message);
  }
}