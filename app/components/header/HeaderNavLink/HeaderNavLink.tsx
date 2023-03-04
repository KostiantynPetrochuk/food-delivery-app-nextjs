import Image from "next/image";
import "./HeaderNavLink.scss";

interface HeaderNavLinkPropsType {
  imagePath: string;
  categoryName: string;
}

const HeaderNavLink = (props: HeaderNavLinkPropsType) => {
  const {imagePath, categoryName} = props;
  return (
    <li className="header-bot-menu-list-item">
      <a href="#" className="header-bot-menu-list-item__link">
        <Image src={imagePath} alt={""} width={40} height={40} />
        <span>{categoryName}</span>
      </a>
    </li>
  );
};

export default HeaderNavLink;