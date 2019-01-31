import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

 userDatas = [];
 bloodGroups:any;
 selectedBloodGroup:string = '0';
bloodList:any = null;
  constructor(
    private loginSerice: LoginService
  ) { }

  ngOnInit() {
    this.getUserDatas();
  }

  public getUserDatas(){
    this.loginSerice.getUserDatas().subscribe((res:any)=>{
    console.log(res.data);
    this.userDatas = res.data;
    this.bloodList = this.userDatas;
  })
  }

  public getBloodGroups(){
    // this.loginSerice.getBloodGroups().subscribe((data: Array<String>)=>{
    // this.bloodGroups=data;
    // console.log(data);
    this.userDatas = [];
    this.userDatas.push(this.bloodList.find(item=>item.bloodGroup=this.selectedBloodGroup));
    //this.userDatas = this.bloodList.find(item=>item.bloodGroup=this.selectedBloodGroup);
    console.log('filtered data',this.userDatas);
  //})
  }
}
