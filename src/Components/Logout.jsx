import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";

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
};

const Logout = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/")
  };

  return (
    <div>
      <Button onClick={handleOpen}>LOGOUT</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className="logoutIconBox">
            <ErrorOutlineIcon className="logoutIcon" />
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ingin keluar dari akun?
          </Typography>
          <Button onClick={handleClose}>Kembali</Button>
          <Button onClick={handleLogout}>Keluar</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Logout;
