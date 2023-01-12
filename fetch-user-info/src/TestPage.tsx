import React from "react";
import Input from "./Common/Form";
import style from "./Resources/styles/testPage.module.scss";

const TestPage: React.FC = () => {
  return (
    <div className={style.testPage}>
      <div className={style.wrapper}>
        <h1>Axe Api Page</h1>
        <div className={style.container}>
          <h2>必須パラメータ</h2>
          <div className={style.apiItems}>
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
