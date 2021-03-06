import React from 'react';
import PropTypes from 'prop-types';

import './providers.scss';
import DashNav from 'src/containers/DashNav';
import Budget from 'src/containers/Budget';
import { Link } from 'react-router-dom';


const Providers = ({ showProvidersList }) => {
  const handleChange = (theme) => () => {
    showProvidersList(theme);
  };
  return (
    <div id="providers">
      <div className="navBudget">
        <DashNav />
        <Budget />
      </div>
      <div className="providersBoard">
        <div className="homeIcons">
          <div className="iconHome" onClick={handleChange('Salle')}>
            <Link to="/dashboard/wedding-room">
              <div className="imagesalle" />
              <div className="itemText">Les salles de reception</div>
            </Link>
          </div>

          <div className="iconHome" onClick={handleChange('Musique')}>
            <Link to="/dashboard/wedding-room">
              <div className="imagedj" />
              <div className="itemText">Les DJ</div>
            </Link>
          </div>
          <div className="iconHome" onClick={handleChange('Traiteur')}>
            <Link to="/dashboard/wedding-room" replace>
              <div className="imagetraiteur" />
              <div className="itemText">Les traiteurs</div>
            </Link>
          </div>
          <div className="iconHome" onClick={handleChange('Tailleurs')}>
            <Link to="/dashboard/wedding-room" replace>
              <div className="imagetailleur" />
              <div className="itemText">Le tailleur</div>
            </Link>
          </div>
        </div>
        <div className="homeIcons">
          <div className="iconHome" onClick={handleChange('Alliances')}>
            <Link to="/dashboard/wedding-room" replace>
              <div className="imagealliances" />
              <div className="itemText">Les alliances</div>
            </Link>
          </div>
          <div className="iconHome" onClick={handleChange('Animation')}>
            <Link to="/dashboard/wedding-room" replace>
              <div className="imageanim" />
              <div className="itemText">Les animations</div>
            </Link>
          </div>
          <div className="iconHome" onClick={handleChange('Transport')}>
            <Link to="/dashboard/wedding-room" replace>
              <div className="imagevehicule" />
              <div className="itemText">Location de vehicules</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Providers.propTypes = {
  showProvidersList: PropTypes.func.isRequired,
};

export default Providers;
