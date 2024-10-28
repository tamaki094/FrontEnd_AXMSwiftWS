import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withComponentInputBinding()), 
    provideFirebaseApp(() => 
      initializeApp({
        "projectId": "ng-task-18-ac282", 
        "appId": "1:709740744095:web:cb5f679abe3c5339ba41aa",
        "storageBucket": "ng-task-18-ac282.appspot.com", 
        "apiKey": "AIzaSyCHPDRNb7L_MAo-FcAL6nzh4dQWWPFw604", 
        "authDomain": "ng-task-18-ac282.firebaseapp.com", 
        "messagingSenderId": "709740744095" })), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())]
};
