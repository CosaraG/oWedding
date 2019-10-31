import React from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

import './auth.scss';
import LoadingForButton from 'src/components/LoadingForButton';
import PasswordForgotten from 'src/containers/PasswordForgotten';


const Auth = ({
  username, password, changeInputConnect, connectFunc, closeLoginForm,
  logged, errorLoginPseudo, passwordForgotten, loading, mdpForgotten,
  errorLoginPassword,
}) => {
  const handleChange = (event) => {
    const { value, name } = event.target;
    changeInputConnect(value, name);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    connectFunc();
  };
  const handlePassword = () => {
    console.log('click pass forgotten');
    mdpForgotten();
  };
  return (
    <div id="auth">
      {logged && (<Redirect to="/dashboard" />)}
      {passwordForgotten ? <PasswordForgotten /> : (
        <>
          <Icon
            name="times circle outline"
            className="authIconClose"
            onClick={closeLoginForm}
          />
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Pseudo ou Email</label>
              <input
                placeholder="Pseudo ou E-mail"
                value={username}
                name="username"
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Mot de passe</label>
              <input
                placeholder="Mot de passe"
                value={password}
                name="password"
                type="password"
                onChange={handleChange}
              />
            </Form.Field>
            <div className="mdpForgotten" onClick={handlePassword}>Mot de passe oublié ?</div>
            {(errorLoginPseudo || errorLoginPassword) && (
              <div className="errorMessage">
                Identifiant ou mot de passe incorrect !
              </div>
            )}
            <Button type="submit">{loading ? <LoadingForButton /> : 'Se connecter'}</Button>
          </Form>
          <Link className="redirection" to="/signup">Pas encore inscrit ?</Link>
        </>
      )}
    </div>
  );
};

Auth.propTypes = {
  loading: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeInputConnect: PropTypes.func.isRequired,
  connectFunc: PropTypes.func.isRequired,
  closeLoginForm: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  errorLoginPseudo: PropTypes.bool.isRequired,
  errorLoginPassword: PropTypes.bool.isRequired,
  passwordForgotten: PropTypes.bool.isRequired,
  mdpForgotten: PropTypes.func.isRequired,
};

export default Auth;
