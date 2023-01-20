import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputInterface from "../Entities/InputInterface";
import userInfoStatusAction from "../Http/Action/UserInfoStatusAction";
import OutputInterface from "../Entities/OutputInterface";

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

  const [result, setResult] = useState<OutputInterface>({
    userName: "",
    uid: "",
    nowRank: "",
    maxRank: "",
  });
  const onSubmit: SubmitHandler<InputProps> = (data) => {
    const inputs: InputInterface = {
      apiKey: data.apiKey,
      userName: data.userName,
      platform: data.platform,
    };
    userInfoStatusAction(inputs).then((value: OutputInterface) => {
      setResult(value);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>API Key </label>
          <input {...register("apiKey", { required: true })} />
        </div>
        <div>
          <label>Platform </label>
          <input {...register("platform", { required: true })} />
        </div>
        <div>
          <label>User Name </label>
          <input {...register("userName", { required: true })} />
        </div>
        {errors.required && (
          <span style={{ color: "red" }}>全ての項目を入力してください</span>
        )}
        <input type="submit" />
      </form>
      <div>
        <h2>結果</h2>
        <div>
          <div>
            <label>プレイヤー名: {result.userName}</label>
          </div>
          <div>
            <label>UID: {result.uid}</label>
          </div>
          <div>
            <label>現在のランク: {result.nowRank}</label>
          </div>
          <div>
            <label>最高ランク: {result.maxRank}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
