import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);

  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map((photo, index) => (
            <div className="col-4 mb-4" key={index}>
              <a href={photo.url} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  className="img-fluid"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
