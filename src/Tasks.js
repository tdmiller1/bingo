import { db } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import { ref, child, get, update, remove } from "firebase/database";

export function createNewTask() {
  const postData = {
    uid: uuidv4(),
    body: "New task",
    selected: false,
  };

  const updates = {};
  updates["/tasks/" + postData.uid] = postData;

  return update(ref(db), updates);
}

export async function updateTask(uid, selected, text) {
  const updates = {};

  await get(child(ref(db), `/tasks/${uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        console.log(selected);
        updates["/tasks/" + uid] = {
          ...snapshot.val(),
          selected,
          body: text,
        };
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return update(ref(db), updates);
}

export async function deleteTask(uid) {
  console.log(uid);
  return remove(ref(db, `/tasks/${uid}`));
}
