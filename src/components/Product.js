import React from "react";

function Product({ product, basket, setBasket, total, money }) {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <>
      <div className="product">
        <img src={product.image} alt="" />
        <h6>{product.title}</h6>
        <div className="price">{product.price} TL</div>
        <div className="actions">
          <button
            className="sell-btn"
            disabled={!basketItem}
            onClick={removeBasket}
          >
            Sil
          </button>
          <span className="amount">
            {(basketItem && basketItem.amount) || 0}
          </span>
          <button
            className="buy-btn"
            disabled={total + product.price > money}
            onClick={addBasket}
          >
            Satın Al
          </button>
        </div>
        <style jsx>
          {`
            .product {
              padding: 15px;
              background: #fff;
              border: 1px solid #ddd;
              margin-bottom: 20px;
              width: 24%;
            }
            .product img {
              width: 100%;
            }
            .product h6 {
            font-size: 20px;
            margin-bottom: 10px;
            }
            .product .price {
            font-size: 20px;
            color: black:
            }
            .product .actions {
            display: flex;
            align-items: center;
            }
            .actions button {
            height: 40px;
            padding: 0 15px;
            flex: 1;
            }
            .actions .amount {
            width: 50px;
            text-align: center;
            }
          `}
        </style>
      </div>
    </>
  );
}

export default Product;
