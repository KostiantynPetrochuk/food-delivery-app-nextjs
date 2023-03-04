import Image from "next/image";
import MobMenu from "@/app/components/header/MobMenu/MobMenu";
import HeaderNav from "@/app/components/header/HeaderNav/HeaderNav";
import BasketButton from "@/app/components/header/BasketButton/BasketButton";
import HeaderMob from "@/app/components/header/HeaderMob/HeaderMob";
import HeaderInfo from "@/app/components/header/HeaderInfo/HeaderInfo";
import OrderCallButton from "@/app/components/header/OrderCallButton/OrderCallButton";
import OrderPhone from "@/app/components/header/OrderPhone/OrderPhone";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <MobMenu />
      <div className="container">
        <div className="header-top">
          <div className="header-top-left">
            <div className="header-logo-inner">
              <Image className="header-logo__img" src={"/img/logo.jpg"} alt={""} width={100} height={100} />
            </div>
            <HeaderInfo city={"Хмельницький"} deliveryTime={"30"} />
          </div>
          <div className="header-top-right">
            <OrderCallButton addClassName={"header-top-right__button"} />
            <OrderPhone phone={"044 65 98 658"} />
          </div>
        </div>
        <div className="header-bot-inner">
          <div className="header-bot">
            <HeaderNav />
            <BasketButton />
          </div>
        </div>
        <HeaderMob />
      </div>
    </header>
  );
};