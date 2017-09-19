import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-listatarea',
  templateUrl: './listatarea.component.html'
})
export class ListatareaComponent implements OnInit {
  tarea: FirebaseListObservable<any[]>;
  nombretarea:string="";


  constructor(db: AngularFireDatabase) {
      this.tarea= db.list('/tareas');
  }
  ngOnInit() {
  }
  enviartarea(nombretarea:string){
    this.tarea.push({
      "nombretarea":nombretarea
    })
    this.nombretarea="";
  }

}
