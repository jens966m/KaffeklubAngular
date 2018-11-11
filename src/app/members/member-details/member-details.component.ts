import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/shared/models/member';
import { MemberService } from 'src/app/shared/services/member.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  member: Member;
  constructor(private route: ActivatedRoute, private memberService: MemberService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.memberService.getMemberById(id).subscribe(membFromRest => {this.member = membFromRest; });
    }
  }

