import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { useEffect } from "react";
import axios from "axios";
import { PromotionDetails } from "../../types/types";

import useAppStore from "../../context/appContext";
import usePromotions from "../../hooks/usePromotions";
import classes from "./style.module.scss";
import PromotionCard from "../PromotionCard";

const PromotionCarousel = () => {
  const { loading, error, promotions } = usePromotions();

  const promotionIDs = useAppStore((state) => state.promotionIDs);
  const pushPromotionID = useAppStore((state) => state.pushPromotionID);

  async function getPromotionType(id: number) {
    try {
      const response = await axios.get(
        `https://api.extrazone.com/promotions?Id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "X-Language-Id": "TR",
            "X-Country-Id": "TR",
          },
        }
      );
      const promotion: PromotionDetails = response.data;
      const types =
        promotion.PromotionDetailItemAreas[0].PromotionDetailItems.map(
          (item) => {
            return item.Title;
          }
        );
      return types;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error when fetching promotion. " + error.message);
      }
      return [];
    }
  }

  useEffect(() => {
    if (promotions && promotionIDs.length === 0) {
      promotions.forEach((promotion) => {
        getPromotionType(promotion.Id).then((types) => {
          pushPromotionID(promotion.Id, types);
        });
      });
    }
  }, [promotions, promotionIDs, pushPromotionID]);

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
