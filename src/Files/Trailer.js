import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Trailer(){
    return(
        <div className="ratio ratio-16x9 video--box">
        <iframe
          src="https://www.youtube.com/embed/j-BIJLh74_g"
          title="Felvidek"
          allowFullScreen>
          </iframe>
        </div>
    )
}