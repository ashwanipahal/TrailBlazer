import React from 'react';
import './style.scss';

const FooterComponent = (props) => {
return (
    <div className="footer">
           <div className="footer__elements"><img src="images/logo.png" alt="logo" />
                <p>&copy;&nbsp;2021 TrailBlazer</p>
           </div> 
    </div>
  );
};

export default FooterComponent;