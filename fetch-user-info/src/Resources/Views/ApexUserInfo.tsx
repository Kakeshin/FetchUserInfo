import React from "react";
import Form from "../../Common/Form";
import style from "../styles/testPage.module.scss";

const ApexUserInfo: React.FC = () => {
  return (
    <div className={style.testPage}>
      <div className={style.wrapper}>
        <h1>Axe Api Page</h1>
        <div className={style.container}>
          <h2>必須パラメータ</h2>
          <div className={style.apiItems}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApexUserInfo;
