import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './home/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './tarifas/table-list.component';
import { TypographyComponent } from './publicaciones/typography.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {AuthService} from './auth.service';
import {ServicesService} from './services.service';
import { LoginComponent } from './login/login.component';
import { PublicaionDetailComponent } from './publicaion-detail/publicaion-detail.component';

var firebaseConfig = {
    apiKey: "AIzaSyBrQ-M9xLaDFDFHIbdBPp0inZ1mQHUvJ6o",
    authDomain: "vuefire-8c3c9.firebaseapp.com",
    databaseURL: "https://vuefire-8c3c9.firebaseio.com",
    projectId: "vuefire-8c3c9",
    storageBucket: "vuefire-8c3c9.appspot.com",
    messagingSenderId: "369029071648"
  };

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    NotificationsComponent,
    LoginComponent,
    PublicaionDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService,ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
