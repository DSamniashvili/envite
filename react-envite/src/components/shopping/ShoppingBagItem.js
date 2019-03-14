import React from 'react'

const ShoppingBagItem = props => {
  return (
    <div className="shopping_item_wrapper">
      <div className="shopping_item_image">
          <img src={props.item.url} alt="shopping item"/>
      </div>
      <div className="shopping_item_name">
          <p>{props.item.name}</p>
      </div>
      <div className="shopping_item_currentP">
            <p>{props.item.currentP}</p>
      </div>
      <div className="shopping_item_oldP">
            <div className="rotated_line"></div>
            <p>{props.item.oldP}</p>
      </div>
      
    </div>
  )
}

export default ShoppingBagItem;
