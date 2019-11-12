import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MigrateService {
  private url = `${environment.API}global`;
  private sistema = `${environment.API}sistema`;
  constructor(
    private http: HttpClient
  ) { }

  getSchemasDb(): Observable<Array<string>> {
    return this.http.get<Array<string>>(`${this.url}/getSchemas`);
  }

  getIndexShema(index: string): Observable<Array<object>> {
    return this.http.get<Array<object>>(`${this.url}/getSchemas/${index}`);
  }

  getDataFile(formData: FormData): Observable<object> {
    return this.http.post(`${this.sistema}/file`, formData);
  }

  formatingData(arr: [], change: {}[]): Observable<Array<object>> {
    return this.http.post<Array<object>>(
      `${this.url}/refreshProperty`,
      { arr, change });
  }

  saveData(schema: string, data: {}[], unique: string): Observable<object> {

    return this.http.post<object>(`${this.url}/registerMany`, { schema, data, unique });
  }
}
