import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public payuform: any = {};
  disablePaymentButton: boolean = true;
  constructor(private http: HttpClient,private sharedservice:SharedService) { }
  confirmPayment() {
    const paymentPayload = {
      email: this.payuform.email,
      name: this.payuform.firstname,
      phone: this.payuform.phone,
      productInfo: this.payuform.productinfo,
      amount: this.sharedservice.doctor.fee,
      product_status:this.payuform.product_status
     
    }
   
    return this.http.post<any>('http://localhost:8970/payment/payment-details', paymentPayload).subscribe(
      data => {
      console.log(data);
      this.payuform.txnid = data.txnId;
      this.payuform.surl = data.sUrl;
      this.payuform.furl = data.fUrl;
      this.payuform.key = data.key;
      this.payuform.hash = data.hash;
      this.payuform.txnid = data.txnId;
  
        this.disablePaymentButton = false;
        console.log("hellO "+this.payuform.product_status);
    }, error1 => {
        console.log(error1);
      })
  }
  ngOnInit() {
   var a=(<HTMLInputElement>document.getElementById("productInfo")).defaultValue = "Goofy";
   console.log("Hello"+this.sharedservice.doctor.fee)

   
  }
}


