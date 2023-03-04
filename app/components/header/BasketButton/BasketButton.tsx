import "./BasketButton.scss";
import BasketButtonDropdown from "@/app/components/header/BasketButtonDropdown/BasketButtonDropdown";

const BasketButton = () => {
  return (
    <button className="header-bot-basket__button">
      <span className="header-bot-basket__info">Кошик</span>
      <span className="header-bot-basket__count">3</span>
      <BasketButtonDropdown />
    </button>
  );
};

export default BasketButton;