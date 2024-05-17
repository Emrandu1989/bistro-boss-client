import SectionTitles from "../../../components/SectionTitle/SectionTitles";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20 ">
      <SectionTitles subHeading={"Check it Out"} heading={"Featured Items"} />

      <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="ml-12">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where Can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quo error velit illum distinctio placeat rem quos fugit est
            mollitia.
          </p>

          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
