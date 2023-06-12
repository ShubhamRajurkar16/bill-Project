import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillDataService {

  constructor(private http:HttpClient) { }


 header = new HttpHeaders()
 .set('Content-Type','application/x-www-form-urlencoded')


 
  getData(){
    return this.http.post(`http://68.178.166.216/api/API/BillToPartyMaster/GetData`,{RowId:0})
  }
  
 
  deleteData(RowId:any){
    return this.http.delete(`http://68.178.166.216/api/API/BillToPartyMaster/GetData${RowId}`)
  }

 dataString = 'RowId=0&ActionId=0&Code=Yew&Name=Yew '+ 'Technologies&Address=Nanpura%2C '+ 'Surat&Country=India&State=Gujarat&City=Surat&Mobile=7894561232&Email=Yewtec%40gmail.com&GSTNo=7485FDDF8588F&PANNo=ASDFD4455G&PinCode=356214&Latitude=23.123556&Longitude=78.123456&ContactPersonDetails=%5B%7BRowId%3Anull%2C'+'PersonName%3A+';

 options = {
    url: 'http://68.178.166.216/api/API/BillToPartyMaster/SaveData',
    method: 'POST',
    headers: this.header,
    body: this.dataString
};

saveData(){
  
  return this.http.post('http://68.178.166.216/api/API/BillToPartyMaster/SaveData', this.dataString , {headers: this.header })
  
}
  // getDataById(){
  //   // return this.http.get()
  // }
  // updateAllData(){
  //   // return this.http.put()
  // }

  
}
