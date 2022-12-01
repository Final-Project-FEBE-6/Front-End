import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/ArticleDetail.css";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const ArticleDetail = () => {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      axios
        .get(`https://be-skilvul-production.up.railway.app/artikel/${params._id}`, {headers: {'Authorization': `Bearer ` + localStorage.getItem('token')}})
        .then((response) => {
          console.log(response.data);
          // setArticle(response.data.data);
          // setLoading(false);
        });
    },
    [params]
  );

  return (
    <section>
      {loading ? (
        <Box className="articleLoading">
          <HourglassBottomIcon sx={{ fontSize: 30 }} />
        </Box>
      ) : (
        <div className="article">
          <article className="articleDetail">
            <h1 className="articleDetailTitle">{article.title}</h1>
            <time className="articleDetailTime">
              {new Date(article.publishedAt).toLocaleDateString()}
            </time>
            <img
              className="articleDetailImg"
              src={article.imageUrl}
              alt={article.title}
            />
            <p className="articleDetailSummary">{article.summary}</p>
            <p className="articleDetailSource">
              Source:{" "}
              <a href={article.url} target="_blank" rel="noreferrer">
                {article.newsSite}
              </a>
            </p>
          </article>
        </div>
      )}
    </section>
  );
};

export default ArticleDetail;
