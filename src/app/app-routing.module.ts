import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberAddComponent } from './members/member-add/member-add.component';
import { MemberUpdateComponent } from './members/member-update/member-update.component';

const routes: Routes = [
  { path: 'members', component: MembersListComponent},
  { path: 'members/:id', component: MemberDetailsComponent},
  { path: 'member-update/:id', component: MemberUpdateComponent},
  { path: 'member-add', component: MemberAddComponent},
  { path: '', component: WelcomeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
