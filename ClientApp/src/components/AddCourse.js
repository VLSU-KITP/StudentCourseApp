import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
    const [course, setCourse] = useState({ name: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/courses', course)
            .then(response => {
                console.log(response.data);
                setCourse({ name: '' });
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Добавить курс</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={course.name} onChange={handleChange} placeholder="Название курса" required />
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
};

export default AddCourse;
