import { Injectable } from '@angular/core';
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { app } from 'src/environment/environment';
import { task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  db = getFirestore(app);

  constructor() { }

  async getTaskList(){
    const taskCol = collection(this.db, 'task');
    const taskSnapshot = await getDocs(taskCol);
    const taskList = taskSnapshot.docs.map(doc => doc.data());

    return taskList;
  }

  async save_new_deadline(deadline: task) {

    if(!deadline) return;

    var id = "";

    await setDoc(doc(this.db, "deadlines", id), {
      // title: deadline.title
    });

    return 200;
  }
}
