import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { CustomLayout } from "../CustomLayout";

export function MainPage(props) {
  const navigate = useNavigate();
  return (
    <CustomLayout isShowSideBar={false}>
      <div className="mainPage">
        <p
          className="mainPage__text"
          style={{
            fontWeight: "bold",
          }}
        >
          Введение
        </p>
        <Button onClick={() => navigate("/chapter/0")}>Запустить</Button>
      </div>
    </CustomLayout>
  );
}

MainPage.propTypes = {};
