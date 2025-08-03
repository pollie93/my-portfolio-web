// import React, { useState } from "react";
import linkedinImg from "./assets/linkedin.png";
import githubImg from "./assets/github-imagen.png";
import profilePhoto from "./assets/profilePhoto.png";
import "./styles.css";

// TODO -- Opcion de colocarlo en blanco o en negro

const HomePorfolio = () => {
  //   const [emailCopied, setEmailCopied] = useState(false);

  const nameDev = "Paula Rodriguez";
  const areaWork = "Frontend Developer";
  //   const email = "paularodriguez93.pr@gmail.com";
  return (
    <div>
      <div className="containerPorfolio">
        <div className="containerProfilePhoto">
          <img
            className="profilePhoto"
            src={profilePhoto}
            alt="profile image"
          />
        </div>
        <div className="containerPresentation">
          <h3 className="firstpresentation">Hi my name is,</h3>
          <h2 className="secondpresentation">{`${nameDev}`}</h2>
          <h2 className="thirdpresentation">{`I 'm ${areaWork}`}</h2>
        </div>
      </div>

      {/* Contacto - Mail - redes sociales*/}

      <div>
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="paularodriguez93.pr@gmail.com"
        ></input>
        <button>Enviar</button>
        <button>Copiar email</button>
      </div>
      <div className="container-social-links">
        <a href="https://github.com/pollie93?tab=repositories">
          <img className="social-contact" src={githubImg} alt="github image" />
        </a>
        <a href="https://www.linkedin.com/in/paula-belen-rodriguez/">
          <img
            className="social-contact"
            src={linkedinImg}
            alt="Linkedn image"
          />
        </a>
      </div>
    </div>
  );
};

export default HomePorfolio;
