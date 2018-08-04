import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ContactService {
  
  private API_URL = environment.API_URL;

  constructor( private http: HttpClient ) { }

  public send (form) {
    return this.http.post(this.API_URL + '/email', form);
  }

}
