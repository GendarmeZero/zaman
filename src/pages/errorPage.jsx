import { useRouteError } from "react-router-dom";
import { Navigate  } from 'react-router-dom'; 

import '../styles/error.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-container">
      <h1 className="error-heading">404</h1>
      <p className="error-message">Oops! Zaman router not found.</p>
      <p className="error-description">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        {error && (
            <p>
            <i>{error.statusText || error.message}</i>
            </p>
            )}
            <Navigate  to="/" />
    </div>

  );
}