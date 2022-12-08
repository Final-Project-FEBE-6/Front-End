import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";
import "../assets/css/Logout.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

const Logout = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <Button className="logoutButton" onClick={handleOpen} sx={{color: '#222', backgroundColor:'#eaeaea', padding: '8px 20px'}}>
        LOGOUT
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className="logoutIconBox">
            <ErrorOutlineIcon className="logoutIcon" fontSize="large" />
          </Box>
          <Typography
            id="modal-modal-description"
            className="logoutDescription"
            sx={{ mt: 2, fontSize: 14 }}
          >
            Ingin keluar dari akun?
          </Typography>
          <Box className="logoutBoxButton">
            <Button className="logoutButton kembali" onClick={handleClose} sx={{color: '#222'}}>
              Kembali
            </Button>
            <Button className="logoutButton keluar" onClick={handleLogout} sx={{color: '#222'}}>
              Keluar
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Logout;
