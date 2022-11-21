import Button from "./elements/Button";
import ScrollIcon from "../assets/icons/scroll-icon.png";

const Banner = () => {
  return (
    <div className="banner w-full px-32 mx-auto relative flex place-items-center flex-wrap py-64">
      <div className="banner-description w-full md:w-1/2 py-10 ">
        <h2 className="mb-6 text-4xl font-bold text-white">
          Digitalize your wardrobe, create your own styles
        </h2>
        <p className="font-semibold text-lg text-gray-100 py-2 pr-4">
          Bring your styles to life with our app. Create your own styles, manage
          your wardrobe. Shop for new clothes and accessories with our Eco
          store.
        </p>
        <div className="btn-container">
          <Button
            onClick={() => {
              window.location.href = "/store";
            }}
          >
            Start Here
          </Button>
          <a
            href="/store"
            className="text-greenPrimary hover:text-greenDark font-bold text-decoration-line px-3"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="banner-image w-full md:w-1/2 py-3">
        <img
          src={require("../assets/images/hanging-clothes.jpg")}
          alt="banner"
          className="banner-image w-full h-full object-cover"
        />
      </div>
      <div className="scroll-icon absolute -bottom-10 left-1/2 animate-scrolliconbounce opacity-50">
        <img src={ScrollIcon} alt="scroll" className="-translate-x-1/2 scale-[0.30]" />
      </div>
    </div>
  );
};

export default Banner;
