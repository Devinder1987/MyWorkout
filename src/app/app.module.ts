import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WorkoutPlan } from '../pages/workout/workout';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ModalAddExercise } from '../modal/addWorkout/addExercise';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    WorkoutPlan,
    ContactPage,
    HomePage,
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
    ContactPage,
    HomePage,
    TabsPage,
    ModalAddExercise
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
