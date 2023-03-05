import Image from "next/image";
import "./HomeNoveltyItem.scss";

interface HomeNoveltyItemPropsType {
  imagePath: string;
  name: string;
  price: number;
}

const HomeNoveltyItem = (props: HomeNoveltyItemPropsType): JSX.Element => {
  const { imagePath, name, price } = props;

  return (
    <li className="novelty-item">
      <Image
        className="novelty-item__img"
        src={imagePath}
        alt={""}
        width={100}
        height={100}
      />
      <div className="novelty-info">
        <span>{name}</span>
        <span>{price}грн</span>
      </div>
    </li>
  );
};

export default HomeNoveltyItem;
