import classes from "./style.module.scss"
import useAppStore from "../../context/appContext";

const Tag = ({ tagImage, tagName, tagId }: TagProps) => {
  const tagFilter = useAppStore((state) => state.tagFilter);
  const setTagFilter = useAppStore((state) => state.setTagFilter);

  function handleTagClick(tagName: string) {
    if (tagFilter === tagName) {
      setTagFilter('');
      return;
    }
    setTagFilter(tagName);
  }


  return (
    <div className={tagFilter === tagName ? classes.tagActive : classes.tag } id={'tag-'+tagId} onClick={()=>{
      handleTagClick(tagName);
    }}>
      <img src={tagImage} alt={tagName} className={classes.tagImage}/>
      <span className={classes.tagName}>{tagName}</span>
    </div>
  );
}

interface TagProps {
  tagImage: string;
  tagName: string;
  tagId: number;
}
 
export default Tag;