import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


import { ListPage } from '../list/list';

@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {
  items: FirebaseListObservable<any[]>;
  listPage = ListPage;


  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {
     this.items = db.list('/lists');


     console.log(this.items);

  }

  addList  = (newItem: string)=>{
    if(newItem !=''){
      this.items.push({items: { },listname: newItem, owner: "Bart" });
    }
  }

delete = (item)=> {
    this.items.remove(item);
  }



}