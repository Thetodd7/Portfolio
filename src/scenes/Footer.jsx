import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-orange-300 pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-white">
            Todd Granados
          </p>
          <p className="font-playfair text-md text-white">
            ©2022 T.G All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
