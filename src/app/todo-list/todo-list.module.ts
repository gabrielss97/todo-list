import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [CommonModule],
  exports: [
    TodoListComponent
  ]
})
export class TodoListModule {}
