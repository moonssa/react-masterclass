import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

interface ITodo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}
const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
});
interface IForm {
  toDo: string;
}
function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    console.log("add to do", toDo);
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  console.log(toDos);
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a ToDo",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
