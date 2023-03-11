import Image from "next/image";

import "./BasketSauce.scss";

interface BasketSaucePropsType {
  imagePath: string;
  name: string;
  price: number;
}

const BasketSauce = (props: BasketSaucePropsType) => {
  const { imagePath, name, price } = props;

  return (
    <li className="basket-sauces-item">
      <div className="basket-sauces-item-img-inner">
        <Image
          className="basket-sauces-item__img"
          // src="/img/sauces/buffalo.png"
          src={imagePath}
          alt={""}
          width={500}
          height={500}
        />
      </div>
      {/* <span className="basket-sauces-item__name">Соус Бафало</span> */}
      <span className="basket-sauces-item__name">{name}</span>
      {/* <span className="basket-sauces-item__price">14грн</span> */}
      <span className="basket-sauces-item__price">{price}грн</span>
    </li>
  );
};

export default BasketSauce;
