import Image from "next/image";
import "./HomeEventsItem.scss";

interface HomeEventsItemPropsType {
  imagePath: string;
}

const HomeEventsItem = (props: HomeEventsItemPropsType): JSX.Element => {
  const { imagePath } = props;

  return (
    <li className="events-list-item">
      <a href="#" className="events-list-item__link">
        <Image
          className="events-list-item__img"
          src={imagePath}
          alt={""}
          width={500}
          height={253}
        />
      </a>
    </li>
  );
};

export default HomeEventsItem;
