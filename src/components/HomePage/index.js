// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import WOW from 'wow.js';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import : local
import './homepage.scss';
import Carousel from 'src/components/Carousel';


// == Composant
class HomePage extends React.Component {
  componentDidMount() {
    const wow = new WOW();
    wow.init();
  }

  render() {
    const { logged } = this.props;
    return (
      <div id="homePageContainer">
        <div className="homePage">
          <p className="parag"> Organisez gratuitement votre mariage en quelques clics !</p>
          <p className="lastParag">Nos outils sont à votre disposition ! Vous pourrez ainsi... </p>
          <div className="homeIcons">
            <div className="iconHome">
              <div className="imageprestataires" />
              <div className="itemText">Les prestataires</div>
              <p className="itemDescription">Nous mettons à votre disposition une liste de prestataires pour organiser votre mariage</p>
            </div>
            <div className="iconHome">
              <div className="imageguest" />
              <div className="itemText">La liste d'invités</div>
              <p className="itemDescription">Grace à notre site internet vous pourrez créer et gérer votre liste d'invités en quelques clics!</p>
            </div>
            <div className="iconHome">
              <div className="imageplantable" />
              <div className="itemText">Plan de table</div>
              <p className="itemDescription">Par le biais de notre site, vous pourrez générer un plan de table interractif en quelques minutes!</p>
            </div>
            <div className="iconHome">
              <div className="imagebudget" />
              <div className="itemText">Le budget</div>
              <p className="itemDescription">Vous pourrez ainsi controler et visualiser au mieux votre budget pour avoir l'esprit tranquille! </p>
            </div>
          </div>
          <p className="welcomeText2">Organiser un mariage n'aura jamais été aussi facile et à portée de main! </p>

          <Link to={!logged ? '/signup' : '/dashboard'}>
            <Button className="handleButton">
              J'organise mon mariage
              <Icon name="angle double right" className="iconHomeForButton" />
            </Button>
          </Link>
          <div className="temoignages" />
          <div className="carousel">
            <Carousel />
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  logged: PropTypes.bool.isRequired,
};

// == Export
export default HomePage;
