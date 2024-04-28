import useTags from "../../hooks/useTags";
import Tag from "../Tag";
import classes from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

const TagsCarousel = () => {
  const { loading, error, tags } = useTags();

  return (
    <Swiper
      className={classes.tagContainer}
      slidesPerView="auto"
      spaceBetween={5}
    >
      {loading && <div>Loading...</div>}
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
