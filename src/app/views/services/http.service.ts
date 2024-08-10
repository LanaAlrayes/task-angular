import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  addTask(newTask: string, dateNow: any ,status:any) {
    return this.http.post("http://localhost:3000/tasks", {
      title: newTask,
      date: dateNow,
      finished:status
    })
  }

  getAllTasks() {
    return this.http.get("http://localhost:3000/tasks")
  }

  deleteOneTask(id: any) {
    return this.http.delete(`http://localhost:3000/tasks/${id}`)
  }

  updateTask(body: any, id: any) {
    return this.http.post(`http://localhost:3000/tasks/${id}`, body);
  }
  getIntradayData(){
    return this.http.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo")
  }
}
