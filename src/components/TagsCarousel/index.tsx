import useTags from "../../hooks/useTags";
import Tag from "../Tag";
import classes from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";

const TagsCarousel = () => {
  const { loading, error, tags } = useTags();

  return (
    <Swiper
      className={classes.tagContainer}
      slidesPerView="auto"
      spaceBetween={5}
    >
      {loading && <SwiperSlide style={{width: 'max-content'}}><Skeleton height={36} width={90} count={5} inline={true} style={{marginRight: 5}}/></SwiperSlide>}
      {error && <div>{error}</div>}
      {!error &&
        tags &&
        tags.map((tag) => {
          return (
            <SwiperSlide
              key={tag.Id}
              style={{ width: "max-content" }}
            >
              <Tag tagImage={tag.IconUrl} tagId={tag.Id} tagName={tag.Name} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default TagsCarousel;
