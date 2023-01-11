import React from "react";
import Input from "./Common/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import getUserInfo from "./ApexLegendsStatus";
import style from "./Resources/styles/testPage.module.scss";

interface Inputs {
  apiKey: string;
  userName: string;
  platform: string;
}

const TestPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("onSubmit: ", data);

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
