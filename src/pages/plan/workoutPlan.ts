import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalAddExercise } from '../../modal/addWorkout/addExercise';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-plan',
  templateUrl: 'WorkoutPlan.html'
})
export class WorkoutPlan {

  weekDay
  exerciseArr
  days
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public storage: Storage) {
    this.weekDay = new Date().getDay();
    this.exerciseArr = [];
    this.days = [
      { "value": "0", "text": "Sunday" },
      { "value": "1", "text": "Monday" },
      { "value": "2", "text": "Tuesday" },
      { "value": "3", "text": "Wednesday" },
      { "value": "4", "text": "Thrusday" },
      { "value": "5", "text": "Friday" },
      { "value": "6", "text": "Saturday" }
    ]
    this.setExerciseArr();
  }
  addExercise(day?) {
    let modal = this.modalCtrl.create(ModalAddExercise, { weekDay: day ? day : this.weekDay });
    modal.present();
  }
  setExerciseArr() {
    let exercisePlan = "Intermediate";
    for (let day = 0; day < 7; day++) {
      let fileName = `${exercisePlan}_${day}`
      this.storage.get(fileName).then((val) => {
        if (val) {
          let unique = val.map(item => item.bodyPart);
          let weekday = this.days.filter(function (value, index) { return value.value == day })
          unique = unique.filter(function (value, index) { return unique.indexOf(value) == index; });
          let exercise = { "id": weekday[0].value, "day": weekday[0].text, "bodyPart": unique }
          this.exerciseArr.push(exercise)
        }
      })
    }
  }

}
