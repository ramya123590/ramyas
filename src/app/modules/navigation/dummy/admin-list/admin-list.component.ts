import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AdminService } from "../../services/admin.service";
import { Admin } from "../../models/admin";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  
  admins: Observable<Admin[]>;
   count : any;
   counts:any;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.reloadData();
  };

  reloadData(){
    this.admins=this.adminService.getAdminList();
    console.log(this.admins);
  }



   totalCount(){
  this.count= this.adminService.getTotalCount().subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
  }

  

  deleteAdmin(id: number) {
    this.adminService.deleteAdmin(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
