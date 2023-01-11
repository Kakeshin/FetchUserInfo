import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import getUserInfo from "../ApexLegendsStatus";

interface InputProps {
  apiKey: string;
  userName: string;
  platform: string;
}

const Input: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>();

  const onSubmit: SubmitHandler<InputProps> = (data) => getUserInfo();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>API Key</label>
          <input {...register("apiKey")} />
        </div>
        <div>
          <label>User Name</label>
          <input {...register("userName")} />
        </div>
        <div>
          <label>Platform</label>
          <input {...register("platform")} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Input;
