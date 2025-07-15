import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import fallbackImage from "../../assets/fallback.jpeg";
import styles from "./NewsCard.module.css";


export default function NewsCard({ article }) {
  const { title, description, image_url, link, pubDate, creator, source_id } = article;

  const image = image_url || fallbackImage;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
      <Card className={styles.card} elevation={3}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          onError={(e) => (e.target.src = fallbackImage)}
          className={styles.media}
        />
        <CardContent className={styles.content}>
          <Typography variant="h6" className={styles.title}>
            {title}
          </Typography>
         
          <Typography variant="body2" className={styles.description}>
            {description || "No description available."}
          </Typography>
          
          <div className={styles.meta}>
            <Typography variant="caption">
              {creator?.[0] ? `By ${creator[0]}` : "Unknown Author"} |{" "}
              {new Date(pubDate).toLocaleDateString()}
            </Typography>
            <Typography variant="caption" className={styles.source}>
              {source_id?.toUpperCase()}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
