import { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
     const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
     const {category} = useParams();
     const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
   

    const desserts = menu.filter(m=>m.category ==='dessert')
    const soups = menu.filter(m=>m.category ==='soup')
    const salads = menu.filter(m=>m.category ==='salad')
    const pizzas = menu.filter(m=>m.category ==='pizza')
    const drinks = menu.filter(m=>m.category ==='drinks')
  return (

     
    <div>
          <Helmet>
        <title>Bistro | Order</title>
      </Helmet>
      <Cover img={orderCoverImg} title={"Order Food"}></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
        <OrderTab items={salads}/>
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizzas}/>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soups}/>
  </TabPanel>
  <TabPanel>
  <OrderTab items={desserts}/>
  </TabPanel>
  <TabPanel>
  <OrderTab items={drinks}/>
  </TabPanel>

</Tabs>

    </div>
  );
};

export default Order;
