import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WorkoutPlan } from '../pages/plan/workoutPlan';
import { WorkoutPage } from '../pages/home/workout';
import { workoutHistory } from '../pages/history/workoutHistory';
import { ModalAddExercise } from '../modal/addWorkout/addExercise';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    MyApp,
    WorkoutPlan,
    WorkoutPage,
    workoutHistory,
    TabsPage,
    ModalAddExercise
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WorkoutPlan,
    WorkoutPage,
    workoutHistory,
    TabsPage,
    ModalAddExercise
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
