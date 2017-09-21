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
  editar:boolean=false;
  tareaEditada:string;
  mostrarEditar:boolean=false;
  ocultarIconos:boolean=true;

  constructor(public db: AngularFireDatabase) {
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
    if (tarea!="") {
      this.tareasvistas.push({
        "tareasvistas": tarea
      })
    }
   }
   editarTarea(tareaEditada:string,tareakey:string){

     this.tareasvistas.update(tareakey,{'tareasvistas':tareaEditada})
     this.tareasvistas.update(tareakey,{'editar':false})
     this.tareaEditada="";
   }
    cambiarBoolean(tareakey:string){

      this.tareasvistas.update(tareakey,{ 'editar': true });

      this.editar=!this.editar;
      this.mostrarEditar=!this.mostrarEditar;
      this.ocultarIconos=!this.ocultarIconos;
    }
    cancelarEditar(tareakey:string){
      this.tareasvistas.update(tareakey,{'editar':false})
    }

}
