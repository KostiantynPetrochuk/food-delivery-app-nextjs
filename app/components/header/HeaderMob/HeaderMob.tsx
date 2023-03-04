import Image from "next/image";
import "./HeaderMob.scss";

const HeaderMob = () => {
  return (
    <div className="header-mob">
      <div className="header-logo-inner">
        <Image className="header-logo__img" src={"/img/logo.jpg"} alt={""} width={100} height={100} />
      </div>
      <div className="mob-menu__btn" id="mob_menu_btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default HeaderMob;