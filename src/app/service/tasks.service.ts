import { Injectable } from '@angular/core';
import { getFirestore, setDoc } from 'firebase/firestore';
import { app } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  db = getFirestore(app);

  constructor() { }

}
