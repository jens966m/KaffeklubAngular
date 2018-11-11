import { Injectable } from '@angular/core';
import { Member } from '../models/member';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  apiUrl = 'https://myrestapikaffeklub.azurewebsites.net/api/members';
  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl);
  }

  addMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.apiUrl, member);
  }

  getMemberById(id: number): Observable<Member> {
    return this.http.get<Member>(this.apiUrl + '/' + id);
  }
  updateMember(member: Member): Observable<Member> {
    return this.http.put<Member>(this.apiUrl + '/' + member.id, member);
  }
  deleteMember(id: number): Observable<any> {
   return this.http.delete(this.apiUrl + '/' + id);
  }
}
