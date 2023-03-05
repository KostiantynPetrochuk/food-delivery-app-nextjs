import { HomeMoreDishesButton } from "..";
import DishCard from "../../../components/DishCard";
import "./HomeDishesRow.scss";

const HomeDishesRow = () => {
  return (
    <div className="dishes-row">
      <h3 className="dishes-list__title">Рамен</h3>
      <ul className="dishes-list">
        <DishCard
          imagePath="/img/ramen/nigoshi_ramen_with_ teriyaki_chicken.png"
          dishName="Рамен Нігоші з куркою теріякі"
          ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
          price="250"
        />
        <DishCard
          imagePath="/img/ramen/ramen_with_seafood.png"
          dishName=" Рамен з морепродуктами"
          ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
          price="250"
        />
        <DishCard
          imagePath="/img/ramen/ramen_with_seafood.png"
          dishName="Рамен з копченою куркою"
          ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
          price="250"
        />
        <DishCard
          imagePath="/img/ramen/ramen_curry_with_shrimp.webp"
          dishName="Рамен карі з креветками"
          ingredients="Бульйон з соусом нігоші, локшина, курка теріякі, водорості
                    комбу, азіатський гриб, морква, зелена цибуля, мариноване
                    яйце, кунжут"
          price="250"
        />
      </ul>
      <HomeMoreDishesButton />
    </div>
  );
};

export default HomeDishesRow;
