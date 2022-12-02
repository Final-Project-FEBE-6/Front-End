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
        .get(`https://be-skilvul-production.up.railway.app/artikel/${params.id}`, {
          headers: { Authorization: `Bearer ` + localStorage.getItem("token") },
        })
        .then((response) => {
          setArticle(response.data.data);
          setLoading(false);
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
            <h1 className="articleDetailTitle">{article.judul}</h1>
            <time className="articleDetailTime">
              {new Date(article.tgl_publish).toLocaleDateString()}
            </time>
            <img
              className="articleDetailImg"
              src={article.image}
              alt={article.judul}
            />
            <p className="articleDetailSummary">{article.isi}</p>
            <p className="articleDetailSource">
              Source:{" "}
              <a href={article.sumber} target="_blank" rel="noreferrer">
                {article.nama_sumber}
              </a>
            </p>
          </article>
        </div>
      )}
    </section>
  );
};

export default ArticleDetail;
