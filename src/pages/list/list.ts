import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {
  
  
  items2: FirebaseListObservable<any[]>;

  listId: string;
  // value: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {

    this.listId = this.navParams.data;

    this.items2 = db.list('/lists/'+this.listId+'/products');
     //this.value = db.object('/items');

     console.log(this.items2);
     //console.log(this.value);
  }

  ngOnInit(){
    this.listId = this.navParams.data;
    console.log(this.listId);
  }

  addProduct  = (newItem: string)=>{
    if(newItem !=''){
      this.items2.push({product: newItem, checked: false});
     
    }
  }
  gotIt = (item)=>{
    //item.checked = true;
    if(item.checked == true){
      this.items2.update(item.$key, { checked: false });
    }else{
      this.items2.update(item.$key, { checked: true });
    }
  }

  delete = (item)=> {
    this.items2.remove(item);
  }
 
}






