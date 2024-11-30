
import Hero from "../components/Hero";
import Title from "../components/Title";
import CoffeesCon from "../components/CoffeesCon";
import { useLoaderData } from "react-router-dom";
import FollowUs from "../components/FollowUs";


const Home = () => {
  const data = useLoaderData();
  
  return (
    <div>
      <Hero></Hero>
      <Title></Title>
      <CoffeesCon data={data}></CoffeesCon>
      <FollowUs></FollowUs>
    </div>
  );
};

export default Home;
