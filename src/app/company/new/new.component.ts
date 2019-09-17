import { workHours } from './../../models/project-model';
import { auth } from 'firebase';
import { AuthService } from './../../../../documentation/autorization.service';
import { Component, OnInit } from '@angular/core';
import { NamesService } from './names.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { coloursUser } from 'app/models/user-model';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as moment from 'moment';
import { workItem } from 'app/models/project-model';
import { isNumber } from '@swimlane/ngx-charts/release/utils';

export interface subReport extends workItem { totalHours: number }

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})


export class NewComponent implements OnInit {
  items: any;
  db: any;
  userId: any;
  public name: any;
  colUsers: Observable<coloursUser[]>;
  todayDate: string;
  user: coloursUser;
  allActions: Observable<workItem[]>;
  dailyPlan: Observable<workItem[]>;
  setTim: string;
  todaysubtasksArr: any[];
  dailyReport: any;
  todayTasks: any[];
  allAction2: Observable<subReport[]>;
  weekTasks: any[];
  userList: any[];
  progress: any;

  constructor(private _namesService: NamesService, public afs: AngularFirestore, public auth: AngularFireAuth ) { 
    this.setTim = moment().format('L');
    this.user = { name: "", gender: "", dob: "", age: 0, username: "", email: "", bus_email: "", phoneNumber: "", telephone: null, address: "", nationalId: "", nationality: "", zipCode: null, country: "", city: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", id: "", aboutMe: "", profession: null, qualifications: null, bodyWeight: 0, bodyHeight: 0, bodyMassIndex: 0, industrySector: "", personalAssets: null, personalLiabilities: null, reference: null, focusFactor: 0, userImg: "", LastTimeLogin: "", referee: [null], hierarchy: "", updated: false }; 
    auth.user.subscribe(user => {
      this.userId = user.uid;
      this.callData(user.uid);
      console.log(this.userId);
      this.allData(user.uid);
     

    });
    
    this.colUsers = afs.collection<coloursUser>('Users').valueChanges();
  }

  callData(id){
    let checkTime = moment().format('L');
    let todaysubtasksArr = [];   
    let currentDate = moment().format('L');
    let todayTasks = [];
    let currentUser = this.afs.collection('Users').doc<coloursUser>(id);


    let me = this.afs.collection('Users').doc<coloursUser>(id);
    let mm = me.valueChanges();
    mm.subscribe(user => {
      this.user = user;
      console.log(user);
      console.log(this.user);
    });

    this.allActions = me.collection<workItem>('WeeklyActions').valueChanges();
    this.dailyPlan = me.collection<workItem>('WeeklyActions', ref => ref.where('startDate', '==',moment().format('L'))).valueChanges();
    this.allAction2 = currentUser.collection<subReport>('actionItems').valueChanges();
    this.dailyReport = currentUser.collection<workItem>('actionItems', ref => ref.where('actualStart', '==',moment().format('L'))).valueChanges();

    this.allActions.subscribe(ttt =>{
      console.log(ttt);
      ttt.forEach(item =>{
      // ttt.forEach(function (item, index) {
        console.log('item' + ' ' + item.name + ' ' + 'start' + ' ' + item.startDate);  
        console.log(checkTime.toString());
                
        // if (item.startDate === checkTime) {
        if (item.selectedWork == true) {
          console.log(item.name + ' '  + 'passed'); 
          todaysubtasksArr.push(item);
          this.todaysubtasksArr = todaysubtasksArr;
          console.log(todaysubtasksArr);
          
        } else {
          console.log(item.name + ' '  + 'failed');          
          
        }
          
      })
      
    })

    this.allAction2.subscribe(colRef =>{
      console.log(colRef);
      colRef.forEach(item =>{
        if (item.workHours !== null) {
          console.log(item.workHours);
          item.totalHours = ((1/2)*(item.workHours.length));          
        }
        if ((moment(item.actualStart).isSameOrBefore(checkTime))) {
          console.log(item.name + ' '  + 'passed'); 
          todayTasks.push(item);
          this.todayTasks = todayTasks;
          console.log(todayTasks);
          
        } else {
          console.log(item.name + ' '  + 'failed');  
        }
  
      })
    })
      

  }

  allData(id){
    let actualCounter = 0;
    let planCounter = 0;
    let me = this.afs.collection('Users').doc<coloursUser>(id);
    let mm = me.valueChanges();
    mm.subscribe(user => {

        this.allAction2 = me.collection<subReport>('WeeklyActions').valueChanges();
    this.allAction2.subscribe(colRef =>{
      console.log(colRef);
      colRef.forEach(item =>{
        if (item.name !== null) {
          console.log(item.name);
          planCounter++;          
        }
        if (item.complete == true) {
          console.log(item.workHours);
          actualCounter++;         
        } else {
          console.log(item.name + ' '  + 'not complete');  
        }
        this.progress = (actualCounter/planCounter)*100;
  
      })
    })
    
    });

      console.log(this.user);

  }

// weeklyReport(id){

//   let checkTime = moment().format('L');
//   let weekTasks = [];   
//   let firstDay = moment().subtract(7, 'days').calendar();

//   let me = this.afs.collection('Users').doc<coloursUser>(id);
//   let mm = me.valueChanges();
//   mm.subscribe(user => {
//     this.user = user;
//     console.log(user);
//     console.log(this.user);
//   });

//   this.allActions = me.collection<workItem>('WeeklyActions').valueChanges();
//   this.dailyPlan = me.collection<workItem>('WeeklyActions', ref => ref.where('startDate', '==',moment().format('L'))).valueChanges();
  
//   this.allActions.subscribe(ttt =>{
//     console.log(ttt);
//     ttt.forEach(item =>{
//     // ttt.forEach(function (item, index) {
//       console.log('item' + ' ' + item.name + ' ' + 'start' + ' ' + item.startDate);  
//       console.log(checkTime.toString());
              
//       // if (item.startDate === checkTime) {
//       if ((moment(item.startDate).isSameOrAfter(firstDay)) && item.complete === true) {
//         console.log(item.name + ' '  + 'passed'); 
//         weekTasks.push(item);
//         this.weekTasks = weekTasks;
//         console.log(weekTasks);
        
//       } else {
//         console.log(item.name + ' '  + 'failed');          
        
//       }
        
//     })
    
//   })
// }
  
  ngOnInit() {

  
    
    
  }

}
