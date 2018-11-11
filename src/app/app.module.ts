import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberAddComponent } from './members/member-add/member-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberUpdateComponent } from './members/member-update/member-update.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MembersListComponent,
    WelcomeComponent,
    MemberDetailsComponent,
    MemberAddComponent,
    MemberUpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
