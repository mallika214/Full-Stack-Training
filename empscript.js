// script.js

// Employee class to hold employee data
class Employee {
    constructor(name, id, skill, doj, department) {
        this.name = name;
        this.id = id;
        this.skill = skill;
        this.doj = doj;
        this.department = department;
        this.experience = this.calculateExperience(doj);
    }

    // Method to calculate experience based on DOJ
    calculateExperience(doj) {
        const today = new Date();
        const dojDate = new Date(doj);
        const experience = today.getFullYear() - dojDate.getFullYear();
        return experience;
    }
}

// Initialize the employee array to store employee data
let employees = [];

// DOM Elements
const employeeForm = document.getElementById('employee-form');
const employeeTable = document.getElementById('employee-table').getElementsByTagName('tbody')[0];
const removeEmpBtn = document.getElementById('remove-emp-btn');
const searchEmpBtn = document.getElementById('search-emp-btn');
const searchForm = document.getElementById('search-form');
const searchBtn = document.getElementById('search-btn');
const searchIdInput = document.getElementById('search-id');

// Event listener for adding an employee
employeeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('emp-name').value;
    const id = document.getElementById('emp-id').value;
    const skill = document.getElementById('emp-skill').value;
    const doj = document.getElementById('emp-doj').value;
    const department = document.getElementById('emp-department').value;

    const newEmployee = new Employee(name, id, skill, doj, department);
    employees.push(newEmployee);
    addEmployeeToTable(newEmployee);
    employeeForm.reset();
});

// Function to add an employee to the table
function addEmployeeToTable(employee) {
    const row = employeeTable.insertRow();
    row.setAttribute('data-id', employee.id);

    row.innerHTML = `
        <td>${employee.name}</td>
        <td>${employee.id}</td>
        <td>${employee.skill}</td>
        <td>${employee.doj}</td>
        <td>${employee.department}</td>
        <td>${employee.experience} years</td>
        <td><button onclick="removeEmployee('${employee.id}')">Remove</button></td>
    `;
}

// Function to remove an employee by ID
function removeEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    const row = document.querySelector(`tr[data-id="${id}"]`);
    row.remove();
}

// Event listener for searching an employee
searchEmpBtn.addEventListener('click', () => {
    searchForm.style.display = 'block';
});

searchBtn.addEventListener('click', () => {
    const searchId = searchIdInput.value;
    const employee = employees.find(emp => emp.id === searchId);

    if (employee) {
        alert(`Employee Found!\nName: ${employee.name}\nID: ${employee.id}\nSkill: ${employee.skill}\nDOJ: ${employee.doj}\nDepartment: ${employee.department}\nExperience: ${employee.experience} years`);
    } else {
        alert('Employee not found.');
    }

    searchForm.style.display = 'none';
    searchIdInput.value = '';
});

removeEmpBtn.addEventListener('click', () => {
    const empId = prompt('Enter Employee ID to remove:');
    removeEmployee(empId);
});
