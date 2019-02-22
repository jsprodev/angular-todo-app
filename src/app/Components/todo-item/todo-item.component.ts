import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input() todoI: Todo;
  @Output() deleteTodoO: EventEmitter<any> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // setClasses
  setClass() {
    let classes = {
      'todo-item': true,
      'is-complete': this.todoI.completed
    }
    // console.log(classes);
    return classes; 
  }

  // on toggle todo completed state
  onChange(todo) {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo).subscribe( (res) =>{
      console.log(res);  
    });
  }

  // delete todo item
  onDelete(todo) {
    this.deleteTodoO.emit(todo);
  }

}
