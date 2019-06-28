import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Widget } from 'src/models/widget';

@Injectable()
export class WidgetService {
  constructor(private http: HttpClient) { }

  path = "http://localhost:3000/widgets"

  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    })
  }

  getWidgets(): Observable<Widget[]> {
    return this.http.get<Widget[]>(this.path, this.httpOptions);
  }

  setWidgetState(id: string, widgetName: string) {
    localStorage.setItem("widget" + id, widgetName);
  }

  getWidget(id: number): Observable<any> {
    return this.http.get<any>(this.path + "?id=" + id);
  }

}
