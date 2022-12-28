import React from "react";

const StringInterpolation = () => {
  const text = "Hallo";
  const obj = { name: "user", age: 1.5 };
  const array = ["one"];

  return (
    <div>
      <h1>{text}</h1>
      <h1>{obj.name}</h1>
      <h1>{obj.age}</h1>
      <h1>{array[0]}</h1>
      {489 * 2}
    </div>
  );
};

export default StringInterpolation;
