import aboutImage from "../assets/images/about-img.jpg";
import logoImage from "../assets/images/press-logos.png";

const About = () => {
  const logoImg = "https://i.postimg.cc/63z1c5nM/press-logos.png";

  const bannerImgStyle = {
    background: `url(${logoImage}) repeat-x`,
    height: "100px",
    width: "100%",
  };

  const bannerImgContainerStyle = {
    height: "85px",
    width: "12376px",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "white",
    padding: "25px 0",
  };

  return (
    <div className="bg-white text-gray-700 w-full flex flex-col items-center justify-center">
      <div style={bannerImgContainerStyle}>
        {/* <div style={bannerImgStyle} className="animate-bannermove"></div> */}
        <div style={bannerImgStyle} className="animate-bannermove"></div>
      </div>

      <div className="px-16 py-80 grid sm:grid-cols-1 md:grid-cols-2 gap-4 w-3/4 relative">
        <div className="flex items-center justify-center">
          <img
            src={aboutImage}
            alt="about"
            className="
              w-full
              h-full
              object-cover
              rounded-lg
              shadow-md
              hover:shadow-xl
              transition
              duration-500
              ease-in-out
          "
          />
        </div>
        <div className="">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            We are a team of fashion enthusiasts who are passionate about
            sustainability and the environment. We believe that fashion should
            be fun, affordable and sustainable. We are on a mission to make
            fashion more sustainable by creating a platform that allows users to
            create their own styles, manage their wardrobe and shop for new
            clothes and accessories with our sustainabily sourced products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
