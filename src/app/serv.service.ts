import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http:HttpClient) 
  { }

  baseUrl="https://localhost:7128/api/Users";


  post(products:any){
    return this.http.post(this.baseUrl,products);
  }
  get(){
    return this.http.get(this.baseUrl);
  }
  getsingle(id:number){
    return this.http.get(this.baseUrl + "/" + id);
  }
  delete(id:any){
    return this.http.delete(this.baseUrl+"/"+id);
  }

  update(id:number, data:any){
    return this.http.put(this.baseUrl+"/"+id,data);
  }
}
