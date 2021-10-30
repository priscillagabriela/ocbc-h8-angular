import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Output() editTodoEvent = new EventEmitter<Todo>();
  todos:any[]=[];
  todos2:any[]=[];
  message = '';
  isEdit = false;
  isAppear = false;
  isDisabled = false;
  isHidden = true;
  idVal = 0;
  isNotCompleted = true;

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      },
    ]
  }

  toggleDone (id:number) {
    this.isNotCompleted = false;
    this.todos.map((v,i) => {
      if(i==id) v.completed = !v.completed;
      console.log(v)
      return v;
    })
  }

  toggleDoneEdit () {
    this.isAppear = false;
    this.isHidden = true;
    this.isDisabled = false;
    //this.todos[id] = editmess;

    const todo: Todo = {
      content: this.inputTodo,
      completed: false
    };
      this.editTodoEvent.emit(todo)
      this.inputTodo = "";
      this.todos[this.idVal] = todo;

  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v,i) => i !== id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  // editTodo(data:any) {
  //   this.todos[data.id] = data.todo;
  // }

  editTodo (id:number) {
    //this.editTodoEvent.emit(mess);
    //this.todos[id] = mess;
    //this.isEdit = true;
    this.isAppear = true;
    this.isHidden = false;
    this.isDisabled = true;
    this.idVal = id;
    this.inputTodo = this.todos[this.idVal].content;
  }
}
