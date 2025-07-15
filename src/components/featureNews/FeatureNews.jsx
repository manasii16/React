import useNewsAPI  from "../../hooks/useNewsAPI";
import styles from "./FeatureNews.module.css";
import NewsCard from "../newsCard/NewsCard";
const { VITE_TRENDING_ENDPOINT } = import.meta.env;


export default function FeaturedNews(){
  const { articles, loading, err } = useNewsAPI(VITE_TRENDING_ENDPOINT);
  
  if (loading || err || !articles.length) return null;

  const featured = articles.slice(0, 2);

  return (
    <div className={styles.featureContainer}>
    <h1 className={styles.featureHeading}>Top Trending</h1>
      <div className={styles.row}>

        {featured.map((article, idx) =>(

          <NewsCard 
            key={idx} 
            article={article} 
            className={styles.cardLink} 
            variant="featured"          
          />
        ))}
      </div>
  </div>
  );
}
