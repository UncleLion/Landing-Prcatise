import React from 'react'
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";
import Categories from './components/category';
import ShowFullItem from './components/showfullitem';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Chair',
          img: 'chair-silver.webp',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, et.',
          category: 'chairs',
          price: "39.99"
        },
        {
          id: 2,
          title: 'Light',
          img: 'light-hot.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, et.',
          category: 'light',
          price: "50.00"
        },
        {
          id: 3,
          title: 'Miror',
          img: 'miror.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, et.',
          category: 'miror',
          price: "45.55"
        },
        {
          id: 4,
          title: 'Sofa',
          img: 'sofa-white.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, et.',
          category: 'sofa',
          price: "450.00"
        },
        {
          id: 5,
          title: 'Table',
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, et.',
          category: 'table',
          price: "139.99"
        },
        {
          id: 6,
          title: 'Bed',
          img: 'bed.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, et.',
          category: 'bed',
          price: "340.00"
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }
  render() {
    return (
    <div className="wrapper">Store
      <Header  orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem}  items={this.state.currentItems} onAdd={this.addToOrder} />
      
      {this.state.showFullItem && <ShowFullItem  onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      <Footer />
    </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({ currentItems: this.state.items})
      return
    }

    this.setState({
       currentItems: this.state.items.filter(el => el.category === category )

    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if  (el.id === item.id)
        isInArray = true
    })
    if  (!isInArray)
    this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
