// App.js
import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Sara", age: 22 },
  ]);

  const [newStudent, setNewStudent] = useState({ id: "", name: "", age: "" });

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const addStudent = (e) => {
    e.preventDefault();
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
    setNewStudent({ id: "", name: "", age: "" });
  };

  return (
    <div className="p-4">
      <h2>Student Management</h2>
      <form onSubmit={addStudent}>
        <input name="name" placeholder="Name" value={newStudent.name} onChange={handleChange} />
        <input name="age" placeholder="Age" value={newStudent.age} onChange={handleChange} />
        <button type="submit">Add Student</button>
      </form>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {students.map((s) => (
          <div key={s.id} style={{ border: "1px solid gray", padding: "10px" }}>
            <h4>{s.name}</h4>
            <p>Age: {s.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
