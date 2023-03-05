import Image from "next/image";
import "./HomeInfoItem.scss";

interface HomeInfoItemPropsType {
  imagePath: string;
  title: string;
}

const HomeInfoItem = (props: HomeInfoItemPropsType) => {
  const { imagePath, title } = props;

  return (
    <li className="info-list-item">
      <div className="info-list-item-img-inner">
        <Image
          className="info-list-item__img"
          src={imagePath}
          alt={""}
          width={44}
          height={44}
        />
      </div>
      <span className="info-list-item__text">{title}</span>
    </li>
  );
};

export default HomeInfoItem;
