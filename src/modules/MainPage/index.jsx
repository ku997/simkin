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
        <p className="mainPage__title">
          "ПРОЕКТИРОВАНИЕ ИНФОРМАЦИОННЫХ СИСТЕМ ПРЕДПРИЯТИЙ"
        </p>
        <p className="mainPage__text">Электронное учебное издание</p>
        {
          <Image
            src="assets/img/main/TSTU.jpg"
            annotation=""
          />
        }

        <center>
          <Button onClick={() => navigate("/lecture/0")} type="primary" value="large" className="mainPage__divBtn">К оглавлению</Button>
        </center>
      </div>
    </CustomLayout>
  );
}

MainPage.propTypes = {};
