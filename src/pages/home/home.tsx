import Carousel from "./components/carousel";
import Cta from "./components/cta";
import Features from "./components/features";
import Hero1 from "./components/heros/hero-1";
import Hero2 from "./components/heros/hero-2";
import Hero3 from "./components/heros/hero-3";
import LogoClouds from "./components/logo-clouds";
import Testimonials from "./components/testimonials";

function Home() {
  return (
    <>
      {" "}
      <div className= "mx-auto w-full  justify-center items-center flex  flex-col">
      <Hero1 />
      <Carousel/>
      {/* <Features/> */}
      <Hero2/>
      {/* <LogoClouds /> */}
      <Hero3/>
      {/* <Cta/> */}
      <Testimonials/>
      </div>
     

    </>
  );
}

export default Home;
