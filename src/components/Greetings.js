import React from 'react'

const Greetings = (props) => {
    const patiendID = props.patiendID;
    const age = props.age;
// const Greetings = ({patiendID}) => {

    const patientRecords = [
    { patientId: 'P001', name: 'John Doe', condition: 'Fever' },
    { patientId: 'P002', name: 'Alice Smith', condition: 'Broken Arm' },
    { patientId: 'P003', name: 'Bob Johnson', condition: 'Headache' },
  ];


    // Function to find a patient's record by patient ID
  function findPatientRecordById(patientId) {
    const foundPatient = patientRecords.find(patient => patient.patientId === patientId);
    return foundPatient;
  }

    const one_patient = findPatientRecordById("P001")

    console.log(one_patient)
    console.log("heloo")

  return (
    <>
     <h1 className="text-3xl font-bold underline">This is tailwind</h1>
    <h1>Hello, {patiendID}</h1>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
        <th scope="col" className="px-6 py-3">Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {/* Use map to iterate over the object properties */}
        {Object.entries(one_patient).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default Greetings