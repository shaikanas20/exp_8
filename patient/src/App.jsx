import React, { useState } from "react";

export default function PatientList() {
  const [patients, setPatients] = useState([
    { id: 1, name: "raju", disease: "Fever" },
    { id: 2, name: "anu", disease: "cold" },
    { id: 3, name: "anil", disease: "Asthma" },
  ]);

  const removePatient = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Patient Records
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold">{patient.name}</h2>
              <p className="text-gray-600">ID: {patient.id}</p>
              <p className="text-gray-600">Disease: {patient.disease}</p>
            </div>
            <button
              onClick={() => removePatient(patient.id)}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}

        
        {patients.length === 0 && (
          <p className="text-gray-500 text-center col-span-full">
            No patients available
          </p>
        )}
      </div>
    </div>
  );
}
