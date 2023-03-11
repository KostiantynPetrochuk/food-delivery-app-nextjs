import BreadCrumbs from "../components/BreadCrumbs";
import { DishDetailsCard } from "../partials/Dish";

import "./page.scss";

export default function Dish() {
  return (
    <main className="main">
      <BreadCrumbs />
      <DishDetailsCard
        imagePath="/img/pizza/mexican.png"
        name="Пепероні"
        price={250}
        weight={360}
        ingredients={
          "Пепероні, сир моцарела, гриби, томатний соус, цибуля, перець халапеньо, часник, маринований огірок"
        }
      />
    </main>
  );
}
