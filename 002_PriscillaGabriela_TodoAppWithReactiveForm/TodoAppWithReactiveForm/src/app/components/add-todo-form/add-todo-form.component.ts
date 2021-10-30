import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Todo } from '../../models/Todo';


@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {
  @Output() newTodoEvent = new EventEmitter<Todo>();

  inputTodo:string = "";
  isSubmitted = false;
  errors: any = {addInputTodo:{}}
  isNotFirst = true;
  //changeCount: number = 0;

  constructor() { }

  addData = new FormGroup({
    addInputTodo: new FormControl('', [
      Validators.required,
      //Validators.minLength(5),
      Validators.pattern('[a-zA-Z ]*')
    ])
  })

  ngOnInit(): void {
    this.isNotFirst = false;
  }
  get addInputTodo() {
    return this.addData.get('addInputTodo')
  }

  handleInput() {
    this.isNotFirst = true;
  }

  validateForm() {
    if(this.addInputTodo?.invalid) {
      this.errors.addInputTodo = {...this.addInputTodo?.errors}
    } else {
      this.errors.addInputTodo = {}
    }
  }

  handleAddForm() {
    this.isSubmitted = true
    this.validateForm()
    console.log(this.addInputTodo)
  }

  handleIsSubmittedState() {
    if(this.isSubmitted === true) {
      this.isSubmitted = false
    }
  }

  addTodo() {
    this.isNotFirst = false;
    const todo: Todo = {
      content: this.inputTodo,
      completed: false
    };

  this.newTodoEvent.emit(todo)
  this.inputTodo = "";
  }

}
