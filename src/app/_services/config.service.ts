import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  empApiURL = "https://x5i12db1wg.execute-api.us-east-1.amazonaws.com/prod/";

  constructor(private http: HttpClient) { }

  getTemplates(templates:any){
    return this.http.get(this.empApiURL + 'template', templates);
  }
}
