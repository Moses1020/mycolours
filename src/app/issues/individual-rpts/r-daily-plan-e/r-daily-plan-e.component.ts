import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ReportsService } from 'app/services/reports.service';



@Component({
  selector: 'app-r-daily-plan-e',
  templateUrl: './r-daily-plan-e.component.html',
  styleUrls: ['./r-daily-plan-e.component.css']
})
export class RDailyPlanEComponent implements OnInit {
  company: string;

  constructor(public router: Router,public rService: ReportsService){
    this.company = '';
  }

  ngOnInit() {
  
    this.rService.rOnInit_e("org3","name-list3","startdate3","")

  }

}
