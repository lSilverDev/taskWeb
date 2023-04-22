import { Injectable } from '@angular/core';
import { collection, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { app } from 'src/environment/environment';

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
}
