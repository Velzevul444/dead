import Sosixui from "./Components/sosixui";
import React, {useState} from "react";
import Footer from "./Components/Footer";
import Items from "./Components/items";
import { WiFire } from "react-icons/wi";
import Categories from "./Components/Categories";
import Histories from "./Components/histories";
 class App extends React.Component {


     constructor(props) {
         super(props);
         this.state = {
             orders:[],
             curretnItems:[],

             items:[
                 {
                 id: 1,
                 title: '1 predstovlenie',
                 img: 'veb.jpg',
                 desc:'qwe' ,
                 categories:'childrens',
                 time:'20:00',

             },{
                 id: 2,
                 title: '2 predstovlenie',
                 img: 'images.jpeg',
                 desc:'qwe' ,
                 categories:'panks',

                 time:'20:00'
             },{
                 id: 3,
                 title: '3 predstovlenie',
                 img: 'deth.jpg',
                 desc:'qwe' ,
                 categories:'furi',

                 time: 'now'
             },{
                 id: 4,
                 title: '4 predstovlenie',
                 img: 'images.jpeg',
                 desc:'qwe' ,
                 categories:'panks',
                 time:'20:00' ,

             },{
                 id: 5,
                 title: '5 predstovlenie',
                 img: 'gojo.jpg',
                 desc:'qwe' ,
                 categories:'panks',
                 time:'20:00'
                 }
             ],
             history_item:[
                 {
                     id: 1,
                     vid: "vide.MP4"
                 },
                 {
                     id: 2,
                     title: 'qwe'
                 },
                 {
                     id: 3,
                     title: 'qwe'

                 }
             ],
             actorytes: false
         }
         this.state.curretnItems = this.state.items
         this.metActorytes = this.metActorytes.bind(this)
         this.addToOrder = this.addToOrder.bind(this)
         this.chooseCategories = this.chooseCategories.bind(this)


     }
  render() {
     return (<div className="wrapper">
    <Sosixui orders={this.state.orders} />
    <Histories history_item={this.state.history_item} curretnItem={this.state.curretnItems}/>
    <Categories chooseCategories={this.chooseCategories} />
    <Items metActorytes={this.metActorytes} items={this.state.curretnItems} onAdd={this.addToOrder} />
         {this.state.actorytes && <actorytes />}

    <Footer />

  </div>);
}
     addToOrder(item){
         this.setState({orders: [...this.state.orders, item]});

     }
     chooseCategories(categories){
         if(categories === 'all'){
             this.setState({curretnItems: this.state.items});
             return;
         }
         this.setState({
         curretnItems: this.state.items.filter(el => el.categories === categories)})

     }

     metActorytes() {
         this.setState({actorytes: !this.state.actorytes});
     }
 }

export default App;