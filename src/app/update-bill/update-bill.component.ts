import { Component , OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BillDataService } from '../service/bill-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-bill',
  templateUrl: './update-bill.component.html',
  styleUrls: ['./update-bill.component.css']
})
export class UpdateBillComponent implements OnInit{


  updateDataform = new FormGroup({

  })

  dataId:any;
  constructor(private billDataService:BillDataService, private activatedRoute:ActivatedRoute, private route:Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (res:any) =>{console.log(res);
        this.dataId = res.RowId
      });
      // this.billDataService.getDataById(this.dataId).subscribe(
      //   (res:any) => {console.log(res);
      //   this.updateDataform.setValue(res);
      // })
  }



  updateData(){
    // this.billDataService.updateAllData().subscribe(
    //   (res:any) => {console.log(res)}
    // )
  }

}
