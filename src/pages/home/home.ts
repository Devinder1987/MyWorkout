import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// const data = require('../config/dropDowns.json');

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  schedule: any
  currentDate: Date
  exerciseDate: string
  currentDay: string
  name: any
  isDisabled: string
  currentDayNum: number
  days: Array<Object>
  constructor(public navCtrl: NavController,
    public storage: Storage) {
    this.currentDate = new Date;
    this.currentDay = "Today"
    this.exerciseDate = this.currentDate.toISOString();
    this.currentDayNum = new Date(this.currentDate).getDay();
    this.schedule = [];
    this.setScheduleArr(this.currentDayNum);
    this.isDisabled = "enabled-class";

    storage.set('Name', 'Devinder');
    this.days = [
      {"value": "0", "text": "Sunday"},
      {"value": "1", "text": "Monday"},
      {"value": "2", "text": "Tuesday"},
      {"value": "3", "text": "Wednesday"},
      {"value": "4", "text": "Thrusday"},
      {"value": "5", "text": "Friday"},
      {"value": "6", "text": "Saturday"}
    ]
  }
  setScheduleArr(currentDayNum){
    let plan = "Intermediate";
    let fileName = `${plan}_${currentDayNum}`
    this.storage.get(fileName).then((val) => {
      this.schedule = val ? val : [];
    })
  }
  findSetElement(arr, outerID, innerID) {
    return arr.find(item => item.id === outerID).set.find(item => item.id === innerID)
  }
  countDecrease(outerID, innerID, reps): void {
    if (this.findSetElement(this.schedule, outerID, innerID).status === "Pending") {
      this.findSetElement(this.schedule, outerID, innerID).reps = reps > 1 ? reps - 1 : 15
    }
  }
  buttonDisabled(outerID, innerID, count): void {
    this.findSetElement(this.schedule, outerID, innerID).status = this.findSetElement(this.schedule, outerID, innerID).status === "Pending" ? "Completed" : "Pending";
  }
  ngOnChanges(changes) {
    let exerciseDate = new Date(this.exerciseDate).getDate();
    let exerciseDay = new Date(this.exerciseDate).getDay();
    this.setScheduleArr(exerciseDay);
    this.storage.get('Name').then((val) => {
      console.log(val)
      this.name = val;
    })
    if (exerciseDate === this.currentDate.getDate()) {
      this.currentDay = "Today"
    } else if (exerciseDate === this.currentDate.getDate() + 1) {
      this.currentDay = "Tomorrow"
    } else if (exerciseDate === this.currentDate.getDate() - 1) {
      this.currentDay = "Yesterday"
    } else {
      this.currentDay = "Date"
    }
  }
  submit(){
    let plan = "Intermediate";
    let date = new Date(this.exerciseDate);
    let fileName = `${plan}_${date.getDate()}_${date.getMonth()}_${date.getFullYear()}`;
    this.storage.set(fileName, this.schedule);
  }
  compareFn(option1: any, option2: any) {
      return option1.value === option2.value;
  }
}
