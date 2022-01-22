import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/ErrorPage.css";
import "../assets/css/myTailwind.css";

export default function ErrorPage() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div class="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div class="error-actions">
              <Link to='/'>
              <button type="button" className="py-2 px-2 bg-teal-600">  Back to Login</button>  
              </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
