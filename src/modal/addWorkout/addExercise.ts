import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'addExercise.html'
})
export class ModalAddExercise {
  exercise
  selectedDay: any
  days: Array<Object>
  bodyParts: Array<Object>
  bodyPart: any
  exercisePlan: string;
  exerciseArr: any;

  exerciseName
  set1weight
  set1reps
  set2weight
  set2reps
  set3weight
  set3reps
  set4weight
  set4reps
  cardio
  constructor(
    public storage: Storage,
    public viewCtrl: ViewController,
    params: NavParams
  ) {
    let weekDay = params.get('weekDay');
    this.days = [
      { "value": "0", "text": "Sunday" },
      { "value": "1", "text": "Monday" },
      { "value": "2", "text": "Tuesday" },
      { "value": "3", "text": "Wednesday" },
      { "value": "4", "text": "Thrusday" },
      { "value": "5", "text": "Friday" },
      { "value": "6", "text": "Saturday" }
    ]
    this.selectedDay = this.days.find(function (val: any) {
      return val.value === weekDay.toString();
    })
    this.bodyParts = [
      { "value": "Chest", "text": "Chest" },
      { "value": "Shoulders", "text": "Shoulders" },
      { "value": "Back", "text": "Back" },
      { "value": "Abs", "text": "Abs" },
      { "value": "Biceps", "text": "Biceps" },
      { "value": "Triceps", "text": "Triceps" },
      { "value": "Legs", "text": "Legs" },
      { "value": "Cardio", "text": "Cardio" }
    ]
    this.bodyPart = { "value": "Chest", "text": "Chest" };
    this.exercisePlan = "Intermediate";
    this.exerciseArr = [];
    this.setExerciseArr();
  }
  setExerciseArr() {
    let fileName = `${this.exercisePlan}_${this.selectedDay.value}`
    this.storage.get(fileName).then((val) => {
      this.exerciseArr = val ? val : [];
    })
  }
  compareFn(option1: any, option2: any) {
    return option1.value === option2.value;
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  dateChange() {
    this.setExerciseArr();
  }
  onBodyPartSelect() {
    console.log(this.bodyPart)
  }
  addExercise() {
    let exercise =
      {
        "id": this.exerciseArr.length,
        "weightUnit": "kg",
        "bodyPart": this.bodyPart.text,
        "name": this.exerciseName,
        "set": [
          {
            "id": "1",
            "weight": this.set1weight,
            "reps": this.set1reps,
            "status": "Pending"
          },
          {
            "id": "2",
            "weight": this.set2weight,
            "reps": this.set2reps,
            "status": "Pending"
          },
          {
            "id": "3",
            "weight": this.set3weight,
            "reps": this.set3reps,
            "status": "Pending"
          },
          {
            "id": "4",
            "weight": this.set4weight,
            "reps": this.set4reps,
            "status": "Pending"
          }
        ],
        "cardio": this.cardio
      }
    this.exerciseArr.push(exercise);
  }
  removeExercise(id) {
    let indexVal = this.exerciseArr.findIndex((val, index) => {
      return val.id == id
    });
    this.exerciseArr.splice(indexVal, 1);
    console.log(indexVal);

  }
  submit() {
    this.addExercise();
    let fileName = `${this.exercisePlan}_${this.selectedDay.value}`
    this.storage.set(fileName, this.exerciseArr);
    this.dismiss();
  }
} 