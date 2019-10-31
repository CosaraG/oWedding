// == Import : npm
import React from 'react';

// == Import : local
import './loading.scss';



// == Composant
const Loading = () => (
  <div id="loading">
    <div className="container">
      <div className="dash uno" />
      <div className="dash dos"/>
      <div className="dash tres"/>
      <div className="dash cuatro"/>
    </div>
  </div>
);


// == Export
export default Loading;
