import React, { Component } from 'react';
import ShoppingBagItem from './ShoppingBagItem';
import MenuBarHeader from '../MenuBarHeader';


export default class ShoppingBag extends Component {
  renderShoppingBagItems() {
    return (
      this.props.currentUser.shopping.map((item, index) => {
        return <ShoppingBagItem
          key={index}
          item={item}
        />
      })
    )
  }

  render() {
    return (
      <div className="shopping_bag_wrapper">
        <MenuBarHeader
          showMessagesQuantity={this.props.showMessagesQuantity}
        />

        <div className="shopping_bag_user">
          <div className="shopping_bag_user_img">
            <img src={this.props.currentUser.img} alt="" />
          </div>
          <div className="shopping_bag_user_name_surname">
            <h4>Emma's Green</h4>
            <h5>Shopping Bag</h5>
          </div>
        </div>
        <div className="shopping_items_wrapper">
          {this.renderShoppingBagItems()}
        </div>
        <div className="grey_long"></div>
      </div>

    )
  }
}
