import { useEffect, useState, useRef } from "react";
import "./App.css";
import { db } from "./firebase";
import { updateTask, createNewTask, deleteTask } from "./Tasks";
import { onValue, ref } from "firebase/database";
import { Edit2, Plus, Trash } from "react-feather";

const Square = ({ uid, text, selected }) => {
  const [tempText, setTempText] = useState(text);
  const [editMode, setEditMode] = useState(false);
  const editRef = useRef();
  const editRefCopy = useRef();

  function handleEdit() {
    updateTask(uid, selected, tempText);
    setEditMode(false);
  }
  if (editMode) {
    return (
      <div className={selected ? "Square-selected" : "Square"}>
        <div className="Square-text">
          <input
            value={tempText}
            onChange={(e) => setTempText(e.target.value)}
          />
          <button onClick={handleEdit}>Submit</button>
        </div>
        <div style={{ textAlign: "center" }}>
          <Trash onClick={() => deleteTask(uid)} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={selected ? "Square-selected-read" : "Square-read"}
      onClick={(e) => {
        if (e.target === editRef.current || e.target === editRefCopy.current) {
          setEditMode(true);
        } else {
          updateTask(uid, !selected, text);
        }
      }}
    >
      <div className="Square-text">{text}</div>
      <div className="Square-edit">
        <div ref={editRef}>
          <Edit2 ref={editRefCopy} />
        </div>
      </div>
    </div>
  );
};

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, "tasks/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setTasks(data);
    });
  }, []);

  return (
    <>
      <div className="App">
        <div className="wrapper">
          {Object.values(tasks).map((task) => (
            <Square
              key={task.uid}
              selected={task.selected}
              uid={task.uid}
              text={task.body}
            />
          ))}
        </div>
      </div>
      <div
        onClick={() => {
          createNewTask();
        }}
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          marginRight: 15,
          marginBottom: 15,
          cursor: "pointer",
        }}
      >
        <Plus />
      </div>
    </>
  );
}

export default App;
