import { Component, OnInit,ViewChild  } from '@angular/core';
import {SessionTimeOutService} from '../service/session-time-out.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import { UserIdleService } from 'angular-user-idle';
import { BsModalComponent } from 'ng2-bs3-modal';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SessionTimeOutService]
})
export class HomeComponent implements OnInit {
  @ViewChild('modal')
  modal: BsModalComponent;
  userid;
  IppDetails;
  countData:any;
  
  constructor(private service : SessionTimeOutService,private http: Http,private router: Router,private userIdle: UserIdleService) { }

  ngOnInit() {
    
    this.userid = localStorage.getItem('userId');
    //Start watching for user inactivity.
    this.userIdle.startWatching();
    this.userIdle.onTimerStart().subscribe(countData => {
      this.countData = countData
      console.log(countData)
      this.modal.open();
      if(this.countData == 30){
          this.router.navigateByUrl('/login');
      }
    });
  }

  getIpAddress(){
    this.service.getIP().subscribe(IppDetails => {this.IppDetails = IppDetails
      alert("Your IP Address is:- " +this.IppDetails.ip);
      console.log(this.IppDetails.ip)
    });
  }

  logout(){
    if (confirm('Do you really want to logout')) {
      localStorage.clear();
      this.router.navigateByUrl('/login');
    } else {
      // Do nothing!
    }
  }

  onCancel(){
    this.userIdle.resetTimer();
    this,this.modal.close();
    this.router.navigateByUrl('/home');
  }
}
