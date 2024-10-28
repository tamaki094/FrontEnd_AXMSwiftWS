import { Component, effect, inject, input } from '@angular/core';
import { Task, TaskService } from '../data-access/task.service';
import { RouterLink } from '@angular/router';
import { pipe, of } from 'rxjs';
import {tap, map, filter, switchMap, merge} from 'rxjs/operators';
import { collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './table.component.html',
})
export class TableComponent {
  tasks = input.required<Task[]>();

  constructor(){

    // //**********************************/

    //tarea 1
    const nums = of(1,2,3,4,5,6,7,8,9,10);
      
    const alCuadrado = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n - 1),
      tap((n) =>{
        console.log("tap: " + (n + 5))
      })
    );

    const cuadrado = alCuadrado(nums);
    console.log("no observable");
    console.log(cuadrado);
    console.log(" observable");
    cuadrado.subscribe(x => console.log(x));
    
    //tarea 2

    const lista_tareas = inject(TaskService).tareas;

    console.log("Tareas");

    let nueva_lista = lista_tareas.pipe(
      map(tareas => tareas.filter(tarea => tarea.completed === false))
    );
    console.log("filtrado");
    nueva_lista.subscribe(x => console.log(x));
    

    // let personas = [
    //   { nombre: 'Juan', edad: 18, pais: 'Colombia' },
    //   { nombre: 'Eduardo', edad: 25, pais: 'Ecuador' },
    //   { nombre: 'Diana', edad: 15, pais: 'Colombia' },
    // ];

    // console.log('Personas:\n',personas);

    // let mayoresDeEdad = personas.filter(persona => persona.edad >= 18);

    // console.log('Personas mayores de Edad:\n', mayoresDeEdad);

    // let colombianos = personas.filter(persona => persona.pais === 'Ecuador');

    // console.log('Personas de Colombia:\n',colombianos);


    //***********************************/



    effect(() =>{
      console.log(this.tasks());
    })
  }

}
