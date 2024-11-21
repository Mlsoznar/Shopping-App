import React from "react";

function BasketItem({ item, product }) {
  return (
    <>
      <li>
        {product.title} x {item.amount}
      </li>
      <style jsx>{`
        .basket-item {
          padding-bottom: 10px;
          font-size: 17px;
        }

        .basket-item span {
          color: #999;
        }
      `}</style>
    </>
  );
}

export default BasketItem;
