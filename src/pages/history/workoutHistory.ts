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
    this.historyData = [];
    this.setHistoryData(storageKeys);
  }
  setHistoryData(list) {
    this.storage.keys().then((val) => {
      val.map((fileName) => {
        if (fileName.includes('_note_')) {
          let dates;
          let notes;
          this.storage.get(fileName).then((note) => {
            notes = note;
            dates = fileName.slice(fileName.indexOf('_note_') + 6).replace(/_/g, ' ');
            this.historyData.push({
              date: new Date(dates),
              Note: notes
            })
          })
        }

      })

    })
    // this.historyData = [
    //   {
    //     date: new Date('2017 08 14'),
    //     Note: 'First Day of exercise.',
    //   },
    //   {
    //     date: new Date('2017 08 15'),
    //     Note: 'Second Day of exercise.',
    //   }
    // ]
  }
}