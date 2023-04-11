import React from 'react';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='not-found'>
            <h5>OPPS !.... SORRY</h5>
            <h2 > Page Not Found</h2>
            <h1 >404 </h1>
      <p>We are sorry, but the page you requested could not be found. Try again the right path.</p>
        </div>
    );
};

export default ErrorPage;