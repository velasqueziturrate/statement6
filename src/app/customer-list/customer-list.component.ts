import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  @ViewChild('inputText') inputText: ElementRef; 
  customers : string[] ;

  ngOnInit() {
    this.customers = [];
  }

  addCustomer(customer: string){
    if(customer){
      this.customers.push(customer);
      this.inputText.nativeElement.value = '';
    }
  }

}
