/*
============================================
; Title: Exercise 8.2 Welcome to In-N-Out-Books
; Author: Kimberly Pierce
; Date: August 2020
; Modified By: Kimberly Pierce
; Description: Exercise 8.2 Welcome to In-N-Out-Books
;===========================================
*/


import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';



@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter <IWishlistItem>();
  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  addItem (){
    this.addItemEmitter.emit ({
      title: this.item.title,
      authors: this.item.authors
    })
    this.item = { } as IWishlistItem;
  }

}
