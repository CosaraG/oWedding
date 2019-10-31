// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import : local
import './page.scss';
import AboutUs from 'src/components/AboutUs';
import CookieManagement from 'src/components/CookieManagement';
import Contact from 'src/components/Contact';
import Dashboard from 'src/containers/Dashboard';
import Error404 from 'src/components/Error404';
import GuestsList from 'src/containers/GuestsList';
import HomePage from 'src/containers/HomePage';
import LegalsMentions from 'src/components/LegalsMentions';
import PrivacyPolicy from 'src/components/PrivacyPolicy';
import Providers from 'src/containers/Providers';
import ShowProviders from 'src/containers/ShowProviders';
import SiteMap from 'src/components/SiteMap';
import SignUp from 'src/containers/SignUp';
import TablePlan from 'src/containers/TablePlan';
import UpdatePassword from 'src/containers/UpdatePassword';

// == Composant
const Page = ({ logged }) => (
  <div id="page">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/signup" component={SignUp} />
      {logged && (
        <Route path="/dashboard" exact component={Dashboard} />
      )}
      {!logged && (
        <Redirect from="/dashboard" to="/" />
      )}
      <Route path="/site-map" component={SiteMap} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/cookie-management" component={CookieManagement} />
      <Route path="/legals-mentions" component={LegalsMentions} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/dashboard/guests" component={GuestsList} />
      <Route path="/dashboard/tables" component={TablePlan} />
      <Route path="/dashboard/account" component={UpdatePassword} />
      <Route path="/dashboard/providers" component={Providers} />
      <Route path="/dashboard/wedding-room" component={ShowProviders} />
      <Route component={Error404} />
    </Switch>
  </div>
);

Page.propTypes = {
  logged: PropTypes.bool.isRequired,
};

// == Export
export default Page;
