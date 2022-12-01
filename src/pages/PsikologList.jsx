import { Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "../assets/css/PsikologList.css";
import ReactWhatsapp from "react-whatsapp";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const PsikologList = () => {
  const [psikologs, setPsikologs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    axios.get("https://digimon-api.vercel.app/api/digimon").then((response) => {
      setPsikologs(response.data);
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
                key={psikolog.name}
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
                    src={psikolog.img}
                    alt={psikolog.name}
                  />
                </div>
                <CardContent
                  sx={{ marginLeft: "2%", marginRight: "4%", color: "#222" }}
                >
                  <h1 className="psikologTitle">PSIKOLOG</h1>
                  <p className="psikologDescription">Nama: {psikolog.name}</p>
                  <p className="psikologDescription">
                    Status: {psikolog.level}
                  </p>
                  <p className="psikologDescription">Pengalaman: turu</p>
                </CardContent>
                <Box className="boxIcon">
                  <WhatsAppIcon
                    className="iconWa"
                    sx={{ fontSize: "36px" }}
                    onClick={() => {
                      <ReactWhatsapp
                        number="+62-882-6676-2332"
                        message="Hello, help me please"
                      />;
                    }}
                  />
                </Box>
              </Card>
            );
          })}
        </Box>
      )}
    </section>
  );
};

export default PsikologList;
