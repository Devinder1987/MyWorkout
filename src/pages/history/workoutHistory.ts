import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-workoutHistory',
  templateUrl: 'workoutHistory.html'
})

export class workoutHistory {

  historyData
  constructor(public navCtrl: NavController,
    public storage: Storage,
    public alertCtrl: AlertController) {
    let storageKeys = this.storage.keys();
    this.setHistoryData(storageKeys);
  }
  setHistoryData(list) {
    this.historyData = [
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Chest, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Arms, Abs, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Abs, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: true
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Back, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Soulder, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Legs, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Chest, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Arms, Abs, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Abs, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Back, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Soulder, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Legs, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Chest, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Arms, Abs, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Abs, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Back, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Soulder, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Legs, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Chest, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Arms, Abs, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Abs, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Back, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Soulder, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      },
      {
        date: new Date('2017 08 14'),
        bodyPart: 'Legs, Cardio',
        plan: 'Muscular 8',
        Note: 'First Day of exercise.',
        restDay: false
      }
    ]
    // list.forEach(fileName => {
    //   let date = fileName;
    //   let workout = this.storage.get(fileName).then();
    // });
  }
}