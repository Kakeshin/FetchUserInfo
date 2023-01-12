import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Inputs from "../Entities/InputInterface";
import getUserInfo from "../ApexLegendsStatus";

interface InputProps {
  apiKey: string;
  userName: string;
  platform: string;
  required: string;
}

const Input: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>();

  const onSubmit: SubmitHandler<InputProps> = (data) => {
    const inputs: Inputs = {
      apiKey: data.apiKey,
      userName: data.userName,
      platform: data.platform,
    };
    getUserInfo(inputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>API Key</label>
          <input {...register("apiKey", { required: true })} />
        </div>
        <div>
          <label>Platform</label>
          <input {...register("platform", { required: true })} />
        </div>
        <div>
          <label>User Name</label>
          <input {...register("userName", { required: true })} />
        </div>
        {errors.required && (
          <span style={{ color: "red" }}>全ての項目を入力してください</span>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Input;
