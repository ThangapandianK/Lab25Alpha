import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartitemService } from './cartitem.service';

@Component({
  selector: 'app-cartadd',
  templateUrl: './cartadd.component.html',
  styleUrls: ['./cartadd.component.css']
})
export class CartaddComponent implements OnInit {

  cartData: any[] = [];
  minusDisable = false;


  constructor(private router: Router,
    private cartService: CartitemService) {

  }

  ngOnInit(): void {
    this.GetDetails();
  }

  GetDetails() {
    this.cartService.GetDetails().subscribe({
      next: data1 => {
        this.cartData = data1;
        console.log(data1);
      },
      error: error1 => {
        //console.error('There was an error!', error1);

      }
    });
  }

  submitIncre(inp: any) {

    this.cartService.IncrementQty(inp).subscribe({
      next: data1 => {
        this.GetDetails();
      },
      error: error1 => {
        console.error('There was an error!', error1);
      }
    });
  }

  submitDec(inp: any) {

    this.cartService.DecrementQty(inp).subscribe({
      next: data1 => {
        this.GetDetails();
      },
      error: error1 => {
        console.error('There was an error!', error1);
      }
    });

  }

  disableminus(input: any) {
    if (input < 2) {
      this.minusDisable = true;
      return true
    }

    this.minusDisable = false;
    return false
  }

  total() {

    var add = 0;
    for (var i = 0; i < this.cartData.length; i++) {
      add += this.cartData[i].book.price * this.cartData[i].quantity
    }
    return add
  }


  removal(inp: any) {

    this.cartService.DeleteItem(inp).subscribe({
      next: data1 => {
        this.GetDetails();
      },
      error: error1 => {
        console.error('There was an error!', error1);
      }
    });
  }

  clearAll() {
    this.cartService.DeleteAllItem().subscribe({
      next: data1 => {
        this.GetDetails();
      },
      error: error1 => {
        console.error('There was an error!', error1);
      }
    });
  }
  // clearAll() {
  //   this.cartService.DeleteAllItem().subscribe(res=>{
  //     console.log(res);
  //     this.GetDetails();
  //   })
  // }
}
