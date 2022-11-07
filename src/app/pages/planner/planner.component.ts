import { Component } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent {
  plannerTasks = [
    {
      text: 'Task 1',
      done: true,
    },
  ];
  inputValue = '';

  addTask(): void {
    const newTask = { text: this.inputValue, done: false };

    this.plannerTasks.push(newTask);
  }

  deleteTask(index: number): void {
    this.plannerTasks.splice(index, 1);
  }
}
