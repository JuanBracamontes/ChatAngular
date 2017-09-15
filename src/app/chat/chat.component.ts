import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {

  listaMensajes: FirebaseListObservable<any[]>;
  titulo: string = "Invitado";
  mensaje:string = "";
  editarTitulo:boolean = true;
  MostrarChat:boolean=false;

  constructor(db: AngularFireDatabase) {
    this.listaMensajes = db.list('/mensajes');
  }

  ngOnInit() {
  }

  enviarMensaje(titulo:string, mensaje:string){
    this.listaMensajes.push({
      "titulo": titulo,
      "mensaje": mensaje
    })
    this.mensaje="";

  }

}
