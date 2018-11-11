import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/services/member.service';
import { Member } from 'src/app/shared/models/member';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  members: Member[];

  constructor(private memberService: MemberService) {
  }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.memberService.getMembers().subscribe(listOfMembers => {this.members = listOfMembers;
    });
  }

  delete(id: number) {
    this.memberService.deleteMember(id)
    .subscribe(message => {console.log('deleted user, got message: ' + message); });
    this.refresh();
  }



}
