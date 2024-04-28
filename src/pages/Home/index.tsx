import Header from "../../layout/Header";
import TagsCarousel from "../../components/TagsCarousel";
import PromotionCarousel from "../../components/PromotionCarousel";
import Footer from "../../layout/Footer";
import useAppStore from "../../context/appContext";

import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  const promotionIDs = useAppStore((state) => state.promotionIDs);
  return (
    <>
      <Header />
      <button onClick={() => console.log(promotionIDs)}>Log promotion IDs</button>
      <TagsCarousel />
      <PromotionCarousel />
      <Footer />
    </>
  );
};

export default Home;
