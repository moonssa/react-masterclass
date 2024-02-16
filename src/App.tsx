import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./components/atoms";
import Board from "./components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

// const toDos = ["a", "b", "c", "d", "e", "done"];
function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    console.log("drag finish!!");
    if (!destination) return;
    // setToDos((oldToDos) => {
    //   const copyToDos = [...oldToDos];
    //   copyToDos.splice(source.index, 1);
    //   copyToDos.splice(destination?.index, 0, draggableId);
    //   return copyToDos;
    // });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
