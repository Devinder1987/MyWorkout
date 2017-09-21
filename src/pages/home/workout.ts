import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

// const data = require('../config/dropDowns.json');

@Component({
  selector: 'page-home',
  templateUrl: 'workout.html'
})
export class WorkoutPage {

  schedule: any
  currentDate: Date
  exerciseDate: string
  currentDay: string
  name: any
  isDisabled: string
  currentDayNum: number
  days: Array<Object>
  workoutNote: string
  constructor(public navCtrl: NavController,
    public storage: Storage,
    public alertCtrl: AlertController) {
    this.currentDate = new Date;
    this.currentDay = "Today"
    this.exerciseDate = this.currentDate.toISOString();
    this.currentDayNum = new Date(this.currentDate).getDay();
    this.schedule = [];
    this.setScheduleArr(this.currentDayNum);
    this.isDisabled = "enabled-class";

    // storage.clear();
    this.days = [
      { "value": "0", "text": "Sunday" },
      { "value": "1", "text": "Monday" },
      { "value": "2", "text": "Tuesday" },
      { "value": "3", "text": "Wednesday" },
      { "value": "4", "text": "Thrusday" },
      { "value": "5", "text": "Friday" },
      { "value": "6", "text": "Saturday" }
    ]
  }
  setScheduleArr(currentDayNum) {
    let plan = "Intermediate";
    let date = new Date(this.exerciseDate);
    date.setDate(date.getDate() - 7)
    let lastWorkoutFileName = `${plan}_${date.getDate()}_${date.getMonth()}_${date.getFullYear()}`;
    let planFileName = `${plan}_${currentDayNum}`
    let storageKeys = [];
    // Plan file 
    this.storage.get(planFileName).then((val) => {
      this.schedule = val ? val : [];
    })
    // Last week file
    this.storage.keys().then((val) => {
      storageKeys = val;
      if (storageKeys.find((val, index, arr) => val === lastWorkoutFileName)) {
        this.storage.get(lastWorkoutFileName).then((val) => {
          let schedule = val ? val : [];
          this.schedule['note'] = schedule.note;
          schedule = schedule.map((previous) => {
            for (let exercise = 0; exercise < this.schedule.length; exercise++) {
              if(this.schedule[exercise].name === previous.name && previous.completed === true)
              for (let set = 0; set < this.schedule[exercise].set.length; set++) {
                this.schedule[exercise].set[set].weight = previous.set[set].weight;
                this.schedule[exercise].set[set].reps = previous.set[set].reps;
              }
            }
          })
        })
      }
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
  submit(workoutNote) {
    console.log(workoutNote);
    let plan = "Intermediate";
    let date = new Date(this.exerciseDate);
    let fileName = `${plan}_${date.getMonth()}_${date.getDate()}_${date.getFullYear()}`;
    let noteFileName = `${plan}_note_${date.getMonth()}_${date.getDate()}_${date.getFullYear()}`;
    this.storage.set(fileName, this.schedule);
    this.storage.set(noteFileName, workoutNote);
  }
  showSubmitAlert() {
    let alert = this.alertCtrl.create({
      title: 'Workout Done!!!',
      message: "Please write about today's workout. It will help you to improve next week.",
      inputs: [
        {
          name: 'workoutNote',
          placeholder: 'How was workout?',
          max: 400
        },
      ],
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel'
        },
        {
          text: 'Done',
          handler: (data) => {
            this.submit(data.workoutNote);
          }
        }
      ]
    });
    alert.present();
  }
  compareFn(option1: any, option2: any) {
    return option1.value === option2.value;
  }
}
