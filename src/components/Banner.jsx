import Button from "./elements/Button";

const Banner = () => {
  return (
    <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
      <div className="banner-description w-full md:w-1/2 p-3">
        <h2 className="mb-6 text-4xl font-bold text-white">
          Welcome to our store
        </h2>
        <p className="font-semibold text-lg text-red-600 py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
        <div className="btn-container">
          <Button>Order Now</Button>
          <a
            href="/store"
            className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3"
          >
            Open Store
          </a>
        </div>
      </div>
      <div className="banner-image w-full h-96 md:w-1/2 p-3">
        <img
          src={require("../assets/images/banner-img.jpg")}
          alt="banner"
          className="banner-image w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
