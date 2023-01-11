import React from "react";
import Input from "./Common/Input";
import getUserInfo from "./ApexLegendsStatus";
import style from "./Resources/styles/testPage.module.scss";

const TestPage: React.FC = () => {
  return (
    <div className={style.testPage}>
      <div className={style.wrapper}>
        <h1>Axe Api Page</h1>
        <div className={style.container}>
          <h2>必須パラメータ</h2>
          <div className={style.apiItems}>
            <Input label="Api Key" />
            <Input label="User Name" />
            <Input label="Platform" />
            <button onClick={getUserInfo}>検索</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestPage;
