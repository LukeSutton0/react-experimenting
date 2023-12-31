import React from "react";
import { useRouteError } from "react-router-dom";

interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = () => {
  const error: any = useRouteError();
  console.error(error); //for dev

  return (
    <div id="error-page">
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message || "Unknown error"}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
