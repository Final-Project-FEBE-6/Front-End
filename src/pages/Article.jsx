import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/css/Article.css";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(function () {
    axios
      .get("https://api.spaceflightnewsapi.net/v3/articles")
      .then((response) => {
        setArticles(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="article">
      <Box
        sx={{ display: "flex", justifyContent: "center", color: "#222" }}
        className="articleBox"
      >
        <Box>
          <h1 className="articleHeaderTitle">ARTIKEL</h1>
          <p className="articleHeaderDescribe">
            Baca beberapa artikel dibawah agar pikiran anda jadi lebih cerdas :
          </p>
          {loading ? (
            <Box className="articleLoading">
              <HourglassBottomIcon sx={{ fontSize: 30 }} />
            </Box>
          ) : (
            <Box style={{}} mt={2}>
              {articles.map(function (article) {
                return (
                  <div className="  ">
                    <Card
                      className="articleCard"
                      key={article.id}
                      sx={{ mt: 2, color: "#222", backgroundColor: "#eaeaea" }}
                    >
                      <CardActionArea
                        onClick={() => {
                          navigate(`/article/${article.id}`);
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={article.imageUrl}
                          height="240px"
                          alt={article.title}
                        />
                        <CardContent className="articleContent" sx={{}}>
                          <h2 className="articleTitle">{article.title}</h2>
                          <Typography
                            variant="body2"
                            mt="8px"
                            sx={{ color: "#999" }}
                          >
                            {new Date(article.publishedAt).toLocaleDateString()}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                );
              })}
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Article;
