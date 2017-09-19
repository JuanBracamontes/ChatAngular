import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-listatarea',
  templateUrl: './listatarea.component.html'
})
export class ListatareaComponent implements OnInit {
  tareas: FirebaseListObservable<any[]>;
  tareasvistas: FirebaseListObservable<any[]>;
  nombretarea:string="";
  tareaSeleccionada:string;

  constructor(db: AngularFireDatabase) {
      this.tareas= db.list('/tareas');
      this.tareasvistas =db.list('/tareasvistas');

  }
  ngOnInit() {
  }
  enviartarea(nombretarea:string){
    this.tareas.push({
      "nombretarea":nombretarea
    })
    this.nombretarea="";
  }
   vertarea(tarea:string){
      this.tareasvistas.push({
        "tareasvistas":tarea
      })
   }

}
