import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-crudpart',
  templateUrl: './crudpart.component.html',
  styleUrls: ['./crudpart.component.css']
})
export class CrudpartComponent implements OnInit {

  name:any;
  lastname:any;
  dob:any;
  email:any;
  add:any;
  formdata:any;
  addUsers:any;
  getall:any=[];

  constructor(private ser:ServService) { }

  ngOnInit(): void {

    this.getallusers();
  }

  save(data:any)
  {
    
    console.log(data);
    this.addUsers=data;
    if(data.id == 0){
    this.ser.post(data).subscribe((res)=>{
      this.getallusers();
      alert("add successfully");
    })
  
  }

  else{
    this.ser.update(data.id, data).subscribe((res:any)=>{
      this.getallusers();
 alert("update successfully");
    })
  }
  
}

  getallusers()
  {
    this.formdata=new FormGroup({
      id:new FormControl(0),
      name: new FormControl(""),
      lastname: new FormControl(""),
      dob: new FormControl(""),
      email: new FormControl("")
     })
    this.ser.get().subscribe((res)=>{
      this.getall=res;
      console.log(res);
    })
  }

  edit(id:any)
  {
    this.ser.getsingle(id).subscribe((res:any)=>{
      this.formdata.patchValue({
        id:res[0].id,
        name:res[0].name,
        lastname:res[0].lastname,
        dob:res[0].dob,
        email:res[0].email
      });
      })
  }

  deleterecord(id:any){
    this.ser.delete(id).subscribe((res:any)=>{
      this.getallusers();
      alert("delete successfully");
    })
  
}

}
