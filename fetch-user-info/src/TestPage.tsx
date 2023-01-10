import React from "react";
import Input from "./Common/Input";

const TestPage: React.FC = () => {
  return (
    <div className="wrapper">
      <h1>Axe Api Page</h1>
      <div className="container">
        <div className="api-items">
          <Input label="Api Key" />
          <Input label="User Name" />
          <Input label="Platform" />
          <button title="検索" onClick={() => console.log("button click")}>
            検索
          </button>
        </div>
      </div>
    </div>
  );
};
export default TestPage;
