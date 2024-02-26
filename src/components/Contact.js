import React, { useState } from "react";
import { Snackbar } from "@mui/material";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_vupoxaj",
        "template_jj89hbq",
        {
          name,
          email,
          tel,
          message,
        },
        "apt7AdTSfae1rfI03"
      );

      setName("");
      setEmail("");
      setTel("");
      setMessage("");
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <section className="contact_section layout_padding">
      <div className="contact_bg_box"></div>
      <div className="container">
        <div className="heading_container heading_center">
          <h2 className="titre"> Contact us </h2>
        </div>
        <div className="">
          <div className="row">
            <div className="col-md-7 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="contact_form-container">
                  <div>
                    <div>
                      <input
                        type="text"
                        placeholder="Nom"
                        label="Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        margin="normal"
                        required="le nom est obligatoire"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email "
                        label="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        required="email obligatoire"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="tel "
                        label="tel"
                        name="tel"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        margin="normal"
                        required="telephone obligatoire"
                      />
                    </div>

                    <div className="">
                      <input
                        type="text"
                        placeholder="Message"
                        className="message_input"
                        label="Message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        margin="normal"
                        required="message obligatoire "
                        multiline
                        rows={4}
                      />
                    </div>
                    <div className="btn-box ">
                      <button type="submit"> Envoyer </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>{" "}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        message=" 🙂,Votre message a bien été envoyé "
        sx={{
          backgroundColor: "#32de84",
          marginBottom: "100px",
          marginRight: "180px",
        }}
      />
    </section>
  );
};

export default Contact;
