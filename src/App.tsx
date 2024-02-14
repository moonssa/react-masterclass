import React from "react";
import { useRecoilState } from "recoil";
import { hourSelector, minState } from "./components/atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHourChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    setHours(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={onHourChange}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
}

export default App;
