import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
/*

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event);
    const value = event.currentTarget.value;
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}
*/

interface Iform {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Iform>({ defaultValues: { email: "@naver.com" } });
  // console.log(watch());
  const onValid = (data: Iform) => {
    // console.log(data);

    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }

    //setError("extraError", { message: "Server offline." });
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "이메일 주소를 넣어주세요",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", { required: "이름을 넣어주세요." })}
          placeholder="Fist Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "성을 넣어주세요" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", {
            required: "이 필드는 필수입니다.",
            minLength: { value: 5, message: "your username is too short" },
            validate: {
              noMoon: (value) =>
                value.includes("moon") ? "no moon allowed" : true,
              noNick: (value) =>
                value.includes("nico") ? "no nico allowed" : true,
            },
          })}
          placeholder="User Name"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", {
            required: "password is required",
            minLength: { value: 5, message: "your password is too short" },
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "password confirm is required",
            minLength: { value: 5, message: "your password is too short" },
          })}
          placeholder="Password Confirm"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}
export default ToDoList;
