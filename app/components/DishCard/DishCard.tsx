import Image from "next/image";
import "./DishCard.scss";

interface DishCardPropsType {
  imagePath: string;
  dishName: string;
  ingredients: string;
  price: string;
}

const DishCard = (props: DishCardPropsType) => {
  const { imagePath, dishName, ingredients, price } = props;

  return (
    <li className="dishes-list-item">
      <Image
        className="dishes-list-item__img"
        src={imagePath}
        alt={""}
        width={250}
        height={250}
      />
      <div className="dishes-list-item-body">
        <span className="dishes-list-item-body__title">{dishName}</span>
        <span className="dishes-list-item-ingredients">{ingredients}</span>
        <div className="dishes-list-item-bot">
          <span className="dishes-list-item__price">{price}грн</span>
          <button className="dishes-item__button">В кошик</button>
        </div>
      </div>
    </li>
  );
};

export default DishCard;
