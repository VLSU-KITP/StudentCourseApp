import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        middleName: '',
        group: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/students', student)
            .then(response => {
                console.log(response.data);
                setStudent({ firstName: '', lastName: '', middleName: '', group: '' });
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Добавить студента</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="lastName" value={student.lastName} onChange={handleChange} placeholder="Фамилия" required />
                <input type="text" name="firstName" value={student.firstName} onChange={handleChange} placeholder="Имя" required />
                <input type="text" name="middleName" value={student.middleName} onChange={handleChange} placeholder="Отчество" required />
                <input type="text" name="group" value={student.group} onChange={handleChange} placeholder="Группа" required />
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
};

export default AddStudent;
