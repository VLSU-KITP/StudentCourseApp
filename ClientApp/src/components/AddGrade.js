import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddGrade = () => {
    const [grade, setGrade] = useState({ studentId: '', courseId: '', score: '' });
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('/api/students')
            .then(response => setStudents(response.data))
            .catch(error => console.error(error));

        axios.get('/api/courses')
            .then(response => setCourses(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGrade(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/grades', grade)
            .then(response => {
                console.log(response.data);
                setGrade({ studentId: '', courseId: '', score: '' });
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Добавить оценку</h2>
            <form onSubmit={handleSubmit}>
                <select name="studentId" value={grade.studentId} onChange={handleChange} required>
                    <option value="">Выберите студента</option>
                    {students.map(student => (
                        <option key={student.id} value={student.id}>
                            {student.lastName} {student.firstName}
                        </option>
                    ))}
                </select>
                <select name="courseId" value={grade.courseId} onChange={handleChange} required>
                    <option value="">Выберите курс</option>
                    {courses.map(course => (
                        <option key={course.id} value={course.id}>
                            {course.name}
                        </option>
                    ))}
                </select>
                <input type="number" name="score" value={grade.score} onChange={handleChange} placeholder="Оценка" required />
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
};

export default AddGrade;
