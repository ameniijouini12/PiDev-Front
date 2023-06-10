import { EndpointService } from 'src/app/services/endpoint.service';
import { AuthService } from '../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { DepotService } from '../../../../services/depot.service';

@Component({
  selector: 'app-listdepot',
  templateUrl: './listdepot.component.html',
  styleUrls: ['./listdepot.component.css']
})
export class ListdepotComponent implements OnInit {
  filterTerm!: string;
  id: any;
  depot: any;
  copyList: any;


  constructor(private auth: AuthService, private _depot: DepotService,public endpoint:EndpointService) { }

  ngOnInit(): void {
    let user= this.auth.getUserData();
    this.id = user._id;

    this._depot.getByIdFormateur(this.id).subscribe(
      (res)=>{
        this.depot=res;
        console.log(res);

      },
      (err)=>{
        console.log(err);

      }
    )
  }





}

