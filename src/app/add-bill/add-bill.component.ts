import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BillDataService } from '../service/bill-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent {


  billFormData = new FormGroup({

    GSTNo : new FormControl(),
    PANNo : new FormControl(),
    Code : new FormControl(),
    Name : new FormControl(),
    Address : new FormControl(),
    PinCode : new FormControl(),
    Country : new FormControl(),
    State : new FormControl(),
    City : new FormControl(),
    Mobile : new FormControl(),
    Email : new FormControl(),
    Latitude : new FormControl(),
    Longitude : new FormControl(),
    currency : new FormControl(),
    ContactPersonDetails: new FormControl(),
    RowId : new FormControl(),
    PersonName : new FormControl(),
    PersonMobile : new FormControl(),
    PersonEmail : new FormControl(),
    Department : new FormControl(),
    Designation : new FormControl(),

  })



  constructor(private billDataService:BillDataService, private route:Router){}


  saveAllData(){
   let  billData = new URLSearchParams();
    billData.set('GSTNo',this.billFormData.value.GSTNo);
    billData.set('PANNo',this.billFormData.value.PANNo );
    billData.set('Code',this.billFormData.value.Code );
    billData.set('Name',this.billFormData.value.Name);
    billData.set('Address',this.billFormData.value.Address );
    billData.set('PinCode',this.billFormData.value.PinCode );
    billData.set('Country',this.billFormData.value.Country );
    billData.set('State',this.billFormData.value.State);
    billData.set('City',this.billFormData.value.City );
    billData.set('Mobile',this.billFormData.value.Mobile);
    billData.set('Email',this.billFormData.value.Email );
    billData.set('Latitude',this.billFormData.value.Latitude );
    billData.set('Longitude',this.billFormData.value.Longitude );
    billData.set('currency',this.billFormData.value.currency );
    billData.set('ContactPersonDetails',this.billFormData.value.ContactPersonDetails);

    console.log(billData)

    this.billDataService.saveData().subscribe(
      (res:any) =>{console.log(res);
        this.route.navigate(['viewBillData'])
      }

    )
  }
  
  saveContactData(){

   let contactData = new URLSearchParams();
   contactData.set('RowId',this.billFormData.value.RowId);
   contactData.set('Designation',this.billFormData.value.Designation );
   contactData.set('PersonName',this.billFormData.value.PersonName );
   contactData.set('Department',this.billFormData.value.Department );
   contactData.set('PersonMobile',this.billFormData.value.PersonMobile );

    this.billDataService.saveData().subscribe(
      (res:any) => {console.log(res)}
    )
  }

}
