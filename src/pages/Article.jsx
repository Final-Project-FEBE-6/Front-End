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
      .get(`https://be-skilvul-production.up.railway.app/artikel`, {
        headers: { Authorization: `Bearer ` + localStorage.getItem("token") },
      })
      .then((response) => {
        setArticles(response.data.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="article" style={{ backgroundColor: "#ddd" }}>
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
                    key={article.judul}
                      className="articleCard"
                      sx={{ mt: 2, color: "#222", backgroundColor: "#eaeaea" }}
                    >
                      <CardActionArea
                        className="articleCardAction"
                        onClick={() => {
                          navigate(`/article/${article._id}`);
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={article.image}
                          alt={article.judul}
                          sx={{ height: "200px" }}
                        />
                        <CardContent className="articleContent" sx={{}}>
                          <h2 className="articleTitle">{article.judul}</h2>
                          <Typography
                            variant="body2"
                            mt="8px"
                            sx={{ color: "#999" }}
                          >
                            {new Date(article.tgl_publish).toLocaleDateString()}
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
