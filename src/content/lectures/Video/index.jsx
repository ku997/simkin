import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export function Video(props) {
  return (
    <div className="video">
      <div className="video__element">
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/VRIevtlCdc4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3> Видео 1. Кратко: что такое Agile (аджайл) - Имми Йалиан</h3>
      </div>
      <div className="video__element">
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/gj_UUqFZA0U"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3>Видео 2. Пять ключевых инструментов метода SCRUM</h3>
      </div>
    </div>
  );
}

Video.propTypes = {};
