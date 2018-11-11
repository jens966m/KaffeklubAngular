import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/services/member.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {

    memberForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormControl('')
    });
  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
  }
  save() {
    const member = this.memberForm.value;
    this.memberService.addMember(member).subscribe(memb => {
      this.router.navigateByUrl('members');
    });
  }
}
