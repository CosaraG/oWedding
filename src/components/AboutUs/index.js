import React from 'react';
import { Link } from 'react-router-dom';

import './aboutUs.scss';

const AboutUs = () => (
  <div id="aboutus">
    <div className="intro">
      <p>Crée en 2019, <strong>O'wedding</strong> est une application web qui permet d'organiser son mariage.</p>
      <p>C'est Kevin qui a eu l'idée ! <i className="far fa-smile" /></p>
      <p><strong>Mais Pourquoi ?</strong> Car Kevin se marie l'année prochaine et a trouvé qu'organiser son mariage n'était pas si facile que ça. Il a donc voulu mettre à contribution ses talents de développeurs aux services des futurs mariés. Nous l'avons accompagné tout au long du projet afin de vous proposer un site complet.
      </p>
      <p>Vous souhaitez nous contacter, nous poser une question, c'est par ici :
        <Link to="/contact"> <a className="contact" href="#">Oui oui juste ici !</a></Link>
      </p>
    </div>
    <div className="row">
      <div className="col-sm-3">
        <div className="card">
          <img src="assets/Laurine.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Laurine SARDA</h5>
            <p>Developpeuse front spé React</p>
            <hr />
            {/* <p><em>"Ancienne infirmière"</em></p> */}
          </div>
          <div className="card-header">PO / FRONTEND</div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="card">
          <img src="assets/Guena.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Guéna COSARA</h5>
            <p>Developpeur front spé React</p>
            <hr />
            {/* <p><em>"Ancien technicien de maintenance informatique"</em></p> */}
          </div>
          <div className="card-header">LEAD FRONT</div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="card">
          <img src="assets/Kevin.jpeg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Kévin POGNON</h5>
            <p>Developpeur back spé Symfony</p>
            <hr />
            {/* <p><em>"Ancien chargé de clientèle"</em></p> */}
          </div>
          <div className="card-header">PM / BACKEND</div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="card">
          <img src="assets/Del.JPG" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Delphine TROCME</h5>
            <p>Developpeuse back spé Symfony</p>
            <hr />
            {/* <p><em>"Ancienne Assistante RH"</em></p> */}
          </div>
          <div className="card-header">LEAD BACK</div>
        </div>
      </div>

    </div>
    <script src="https://kit.fontawesome.com/7d50825b89.js" />
  </div>


);

export default AboutUs;
