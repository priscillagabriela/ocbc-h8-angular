import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-edit-todo-form',
  templateUrl: './edit-todo-form.component.html',
  styleUrls: ['./edit-todo-form.component.css']
})
export class EditTodoFormComponent implements OnInit {
  @Output() editTodoEvent = new EventEmitter<{Todo:any,id:number}>();
  isAppear = true;  
  isHidden = false;
  isDisabled = true;
  inputTodo:string = "";
  @Input() todos:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  editTodo (id:number) {
    this.isAppear = false;
    this.isHidden = true;
    this.isDisabled = false;
    //this.todos[id] = editmess;

    const todo: Todo = {
      content: this.inputTodo,
      completed: false
    };
      this.editTodoEvent.emit({Todo:todo,id:id})
      this.inputTodo = "";
  }
}
