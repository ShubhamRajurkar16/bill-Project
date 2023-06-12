import { Component } from '@angular/core';
import { BillDataService } from '../service/bill-data.service';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent {

  allData:any;
  id:any;

  constructor(private billDataService:BillDataService){
    this.getAllData();
  }


  getAllData(){
    this.billDataService.getData().subscribe(
      (res:any) => {console.log(res);
        this.allData = res.Table;
        this.id = res.RowId
      }
    )
  }

  deleteDataById(){
    this.billDataService.deleteData(this.id).subscribe(
      (res:any) =>{console.log(res)}
    )
  }

}
