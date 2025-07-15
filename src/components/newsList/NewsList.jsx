import useNewsAPI from "../../hooks/useNewsAPI";
import NewsCard from "../newsCard/NewsCard";
import styles from "./NewsList.module.css";
import { CircularProgress, Alert } from "@mui/material";

export default function NewsList() {
  const { articles, loading, err } = useNewsAPI();

  if (loading){
    return (
      <div className={styles.loader}>
        <CircularProgress />
      </div>
    );
  }

  if(err){
    return <Alert severity="error">{err}</Alert>;
  }
  if(!articles.length){
    return <p>No articles found.</p>;
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.listHeading}>All News</h2>
      <div className={styles.grid}>
        {articles.map((article, idx) => (
          <NewsCard key={idx} article={article} />
        ))}
      </div>
    </div>
  );
}
