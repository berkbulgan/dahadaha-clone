import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import usePromotions from "../../hooks/usePromotions";
import classes from "./style.module.scss";
import PromotionCard from "../PromotionCard";

const PromotionCarousel = () => {
  const { loading, error, promotions } = usePromotions();

  return (
    <Swiper
      className={classes.promotionCarousel}
      spaceBetween={20}
      slidesPerView={1.25}
      loop={true}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[Pagination, EffectCoverflow]}
    >
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!error &&
        promotions &&
        promotions.map((promotion) => {
          return (
            <SwiperSlide key={promotion.Id}>
              <PromotionCard key={promotion.Id} promotion={promotion} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default PromotionCarousel;
