import { Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "../assets/css/PsikologList.css";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { Link } from "react-router-dom";

const PsikologList = () => {
  const [psikologs, setPsikologs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    axios
      .get(`https://be-skilvul-production.up.railway.app/psikolog`, {
        headers: { Authorization: `Bearer ` + localStorage.getItem("token") },
      })
      .then((response) => {
        setPsikologs(response.data.data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="psikologSection">
      {loading ? (
        <Box className="psikologLoading">
          <HourglassBottomIcon sx={{ fontSize: 30 }} />
        </Box>
      ) : (
        <Box className="psikologBox">
          {psikologs.map(function (psikolog) {
            return (
              <Card
                className="psikologCard"
                key={psikolog._id}
                sx={{
                  display: "flex",
                  width: "70%",
                  mt: "14px",
                  background: "#eaeaea",
                }}
              >
                <div className="psikologImageBox">
                  <img
                    className="psikologImage"
                    src={psikolog.gambar}
                    alt={psikolog.nama}
                  />
                </div>
                <CardContent
                  sx={{ marginLeft: "2%", marginRight: "4%", color: "#222" }}
                >
                  <h1 className="psikologTitle">PSIKOLOG</h1>
                  <p className="psikologDescription">Nama: {psikolog.nama}</p>
                  <p className="psikologDescription">
                    Alamat: {psikolog.alamat}
                  </p>
                  <p className="psikologDescription">
                    Pengalaman: {psikolog.pengalaman}
                  </p>
                  <a href={`https://api.whatsapp.com/send?phone=${psikolog.no_hp}&text=Halo%20Kak,%20saya%20mau%20konsultasi`}>
                    <WhatsAppIcon
                      className="iconWa"
                      sx={{ fontSize: "36px" }}
                    />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      )}
    </section>
  );
};

export default PsikologList;
