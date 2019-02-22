import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) {
    this.todoService.getTodos().subscribe( (res) => {
      this.todos = res;
    });
   }

  ngOnInit() {
  }

  deleteTodo($event) {
    // delete from UI
    this.todos = this.todos.filter( (item) => {
      return item.id != $event.id;
    });
    // delete from server
    this.todoService.deleteTodo($event).subscribe();
  }

  // add todo item
  addTodo($event) {
    // add todo to frontend
    // add todo to server
    this.todoService.addTodo($event).subscribe( (todo) => {
      this.todos.push(todo);
    });
  } 

}
