import '../App.css';
import Carousel from "../components/Carousel.js"
import carouselData from "../carouselData"

function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
          <section className="w-full p-2 md:w-1/2 flex flex-col items-center">
            <Carousel items={carouselData} />
            <h1 className="text-2xl font-bold mt-4 text-center">
              Come join us at Mr. Burger!
            </h1>
          </section>
    </div>
  );
}

export default Home;