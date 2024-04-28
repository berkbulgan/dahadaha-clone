import Header from "../../layout/Header";
import TagsCarousel from "../../components/TagsCarousel";
import PromotionCarousel from "../../components/PromotionCarousel";
import Footer from "../../layout/Footer";

import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  return (
    <>
      <Header />
      <TagsCarousel />
      <PromotionCarousel />
      <Footer />
    </>
  );
};

export default Home;
