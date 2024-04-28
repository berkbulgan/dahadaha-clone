import { Link, useParams } from "react-router-dom";
import classes from "./style.module.scss";
import usePromotion from "../../hooks/usePromotion";
import formatDate from "../../utils/formatDate";
import removeTags from "../../utils/removeTags";
import BackSVG from "../../assets/Images/back.svg";

import Skeleton from "react-loading-skeleton";

const CampaignDetails = () => {
  const { id } = useParams<{ seoName: string; id: string }>();

  const { loading, error, promotionDetail } = usePromotion({ id: Number(id) });

  return (
    <div className={classes.detailPage}>
      {loading && <><Skeleton height={350}/><div style={{paddingRight: 16, paddingLeft: 16}}><Skeleton height={30} style={{marginTop: 12, marginBottom: 12}}/><Skeleton height={12} count={12}/></div></>}
      {error && <div>{error}</div>}
      {promotionDetail && (
        <>
          <div className={classes.imageWrapper}>
            <Link to="/" className={classes.goBackButton}>
              <img src={BackSVG} alt="Back" />
            </Link>
            <img
              className={classes.promotionImage}
              src={promotionDetail.ImageUrl}
            />
            <img
              className={classes.brandImage}
              src={promotionDetail.BrandIconUrl}
            />
            <span className={classes.remainingTime}>
              {formatDate(promotionDetail.RemainingText)}
            </span>
          </div>
          <div className={classes.detailWrapper}>
            {promotionDetail.PromotionDetailItemAreas.map((item) => {
              return (
                <div className={classes.promotionDetails}>
                  <h1 className={classes.promotionTitle}>{item.Title}</h1>
                  <p className={classes.promotionDescription}>
                    {removeTags(item.Description)}
                  </p>
                </div>
              );
            })}
          </div>
          <div className={classes.detailCTA}>{promotionDetail.DetailButtonText}</div>
          <div className={classes.fader}></div>
        </>
      )}
    </div>
  );
};

export default CampaignDetails;
