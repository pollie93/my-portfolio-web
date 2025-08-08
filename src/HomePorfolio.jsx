import React, { useState } from "react";
import Experience from "./components/Experience/Experience";
import Habilities from "./components/Habilities/Habilities";
import linkedinImg from "./assets/linkedin.png";
import githubImg from "./assets/github-imagen.png";
import profilePhoto from "./assets/profilePhoto.png";
import "./styles.css";


const HomePorfolio = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const nameDev = "Paula Rodriguez";
  const areaWork = "Frontend Developer";
  const email = "paularodriguez93.pr@gmail.com";

  const handleEmailCopy = () => {
    console.log("mail copiado", emailCopied);

    return setEmailCopied(!emailCopied);
  };

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
        <input name="email" type="email" placeholder={email}></input>
        <button>Enviar</button>
        <button onClick={handleEmailCopy}>Copiar email</button>
      </div>
      <div>
        <button>Dowload CV</button>
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

      {/* Tecnologías */}
      <div>
        <h2>Tecnologias</h2>
        <Habilities />
      </div>

      {/* Experiencia */}
      <div></div>
      {/* Proyectos */}
      <div>
        <h2>Proyectos</h2>
      </div>
    </div>
  );
};

export default HomePorfolio;
