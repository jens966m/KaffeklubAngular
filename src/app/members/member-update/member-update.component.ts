import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/app/shared/services/member.service';
import { Member } from 'src/app/shared/models/member';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['./member-update.component.css']
})
export class MemberUpdateComponent implements OnInit {
 id: number;
  memberForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl('')
  });
  constructor(private route: ActivatedRoute,
    private memberService: MemberService,
    private router: Router
    ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.memberService.getMemberById(this.id)
    .subscribe(custFromRest => {this.memberForm.patchValue(
    {
      firstName: custFromRest.firstName, lastName: custFromRest.lastName, address: custFromRest.address
    });
    });
  }

    save() {
      const member = this.memberForm.value;
      member.id = this.id;
      this.memberService.updateMember(member)
      .subscribe(membUpdated => {this.router.navigateByUrl('members'); });

      }
}

