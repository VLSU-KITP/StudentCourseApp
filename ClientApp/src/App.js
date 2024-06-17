import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import AddCourse from './components/AddCourse';
import AddGrade from './components/AddGrade';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Список студентов</a></li>
            <li><a href="/add-student">Добавить студента</a></li>
            <li><a href="/add-course">Добавить курс</a></li>
            <li><a href="/add-grade">Добавить оценку</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/add-grade" element={<AddGrade />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
