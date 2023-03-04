import Image from "next/image";
import "./FooterSocialsItem.scss";

interface FooterSocialsItempropsType {
  imagePath: string;
}

const FooterSocialsItem = (props: FooterSocialsItempropsType) => {
  const { imagePath } = props;

  return (
    <a href="#" className="footer-socials-item">
      <Image
        className="footer-socials__logo"
        src={imagePath}
        alt={""}
        width={30}
        height={30}
      />
    </a>
  );
};

export default FooterSocialsItem;
