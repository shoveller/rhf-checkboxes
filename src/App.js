import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onChange"
    // defaultValues:
  });
  const atLeastTwo = (v) => {
    return v.length > 1 || "Please tell me if this is too hard.";
  };

  console.log(errors);
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {[1, 2, 3, 4, 5].map((value) => (
        <input
          key={value}
          type="checkbox"
          value={value}
          {...register("test")}
        />
      ))}
      <button type="submit">submit</button>
    </form>
  );
}
