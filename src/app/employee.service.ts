import { Injectable } from '@angular/core';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee [] = [{eId: 102, name: 'rohit', salary: 251423, gender: 'Male'},
  {eId: 103, name: 'rohini', salary: 251423, gender: 'Female'},
  {eId: 106, name: 'ajay', salary: 25143, gender: 'Male'}];
  constructor() { }

    getEmployees(): Employee[] {
      return this.employees;
    }
    addEmployee(emp: Employee) {
      this.employees.push(emp);
      return true;
    }
}
