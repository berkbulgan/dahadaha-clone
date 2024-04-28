import { Link } from "react-router-dom";
import type { Promotion } from "../../types/types";
import classes from "./style.module.scss";
import removeTags from "../../utils/removeTags";
import formatDate from "../../utils/formatDate";

const PromotionCard = ({promotion}: {promotion: Promotion} ) => {
  return (
    <Link to={'campaign/' + promotion.SeoName + '/' + promotion.Id} className={classes.promotionCard} >
      <div className={classes.promotionImageContainer}>
        <img src={promotion.ImageUrl} alt={promotion.Title} className={classes.promotionImage} />
        <img src={promotion.BrandIconUrl} className={classes.promotionBrandIcon} />
        <span className={classes.promotionRemainingDays}>{formatDate(promotion.RemainingText)}</span>
      </div>
      <span className={classes.promotionTitle}>{removeTags(promotion.Title)}</span>
      <span className={classes.promotionCTA} style={{color: promotion.PromotionCardColor}}>Daha Daha</span>
      <span className={classes.promotionColor} style={{backgroundColor: promotion.PromotionCardColor}}></span>
    </Link>
   );
}
 
export default PromotionCard;