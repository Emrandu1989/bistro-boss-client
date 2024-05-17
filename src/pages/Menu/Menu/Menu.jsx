import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitles from "../../../components/SectionTitle/SectionTitles";
import MenuCategory from "./MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(m=>m.category ==='dessert')
    const soups = menu.filter(m=>m.category ==='soup')
    const salads = menu.filter(m=>m.category ==='salad')
    const pizzas = menu.filter(m=>m.category ==='pizza')
    const offered = menu.filter(m=>m.category ==='offered')
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"} />

      {/* main cover */}

        <SectionTitles subHeading={"Don't Miss"} heading={"today's Offer"} />
             
             {/* offered menu items */}
        <MenuCategory items={offered} />
             {/* dessert menu items */}
        <MenuCategory items={desserts}
        title={"Dessert"}
        img={dessertImg}
        />
        {/* pizza menu item */}
        <MenuCategory items={pizzas}
        title={"pizza"}
        img={pizzaImg}
        />
        {/* salad menu item */}
        <MenuCategory items={salads}
        title={"salad"}
        img={saladImg}
        />
        {/* soup menu item */}
        <MenuCategory items={soups}
        title={"soup"}
        img={soupImg}
        />
    </div>
  );
};

export default Menu;
