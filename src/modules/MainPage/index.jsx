import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { CustomLayout } from "../CustomLayout";
import { Image } from "../../modules/Image";

export function MainPage(props) {
  const navigate = useNavigate();
  return (
    <CustomLayout isShowSideBar={false}>
      <div className="mainPage">
        <p className="mainPage__text">
          ПРОЕКТИРОВАНИЕ ИНФОРМАЦИОННЫХ СИСТЕМ ПРЕДПРИЯТИЙ
        </p>
        {
          <Image
            src="assets/img/lab11/15.jpg"
            annotation="Рис. 15 Фрагмент концептуальной схемы информационной модели"
          />
        }

        <center>
          <Button onClick={() => navigate("/chapter/0")} type="primary" value="large">Запустить</Button>
        </center>
      </div>
    </CustomLayout>
  );
}

MainPage.propTypes = {};
