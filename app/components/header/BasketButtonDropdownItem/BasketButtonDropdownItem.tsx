import Image from "next/image";
import "./BasketButtonDropdownItem.scss";

interface BasketButtonDropdownItemPropTypes {
  imagePath: string;
  dishName: string;
  count: number;
  price: number;
}

const BasketButtonDropdownItem = (props: BasketButtonDropdownItemPropTypes) => {
  const {imagePath, dishName, count, price} = props;

  return (
    <li className="header-bot-basket-dropdown-list-item">
      <div className="header-bot-basket-left">
        <Image className="header-bot-basket__img" src={imagePath} alt={""} width={50}
               height={50} />
      </div>
      <div className="header-bot-basket-middle">
        <span className="header-bot-basket__dish">{dishName}</span>
        <div className="header-bot-basket-counter">
          <div className="header-bot-basket-counter__remove">-</div>
          <div className="header-bot-basket-counter__show">{count}</div>
          <div className="header-bot-basket-counter__add">+</div>
        </div>
      </div>
      <div className="header-bot-basket-right">
                      <span className="header-bot-basket__remove">
                        <span></span>
                        <span></span>
                      </span>
        <span className="header-bot-basket-item__price">{price}грн</span>
      </div>
    </li>
  );
};

export default BasketButtonDropdownItem;