import { HomeNoveltyItem } from "..";
import "./HomeNovelty.scss";

const HomeNovelty = (): JSX.Element => {
  return (
    <section className="novelty">
      <div className="container">
        <div className="novelty-inner">
          <h3 className="novelty-title">Новинки</h3>
          <ul className="novelty-items">
            <HomeNoveltyItem
              imagePath="/img/pizza/caesar.png"
              name="Цезар"
              price={240}
            />
            <HomeNoveltyItem
              imagePath="/img/ramen/pho_bo_with_beef.png"
              name="Фо бо зі свининою"
              price={240}
            />
            <HomeNoveltyItem
              imagePath="/img/rolls/red_dragon.png"
              name="Червоний дракон"
              price={240}
            />
            <HomeNoveltyItem
              imagePath="/img/pasta/pasta_carbonara.webp"
              name="Карбонара"
              price={240}
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeNovelty;
