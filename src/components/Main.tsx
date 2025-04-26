import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://static.wixstatic.com/media/4c3fb9_a7011d6ebd184dadbf21b9e563356278~mv2.jpg/v1/crop/x_24,y_0,w_1870,h_2521/fill/w_460,h_620,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Polish_20191228_233847406.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <h1>João David</h1>
          <p>Escritor de poemas e rimas</p>
        </div>
      </div>
    </div>
  );
}

export default Main;