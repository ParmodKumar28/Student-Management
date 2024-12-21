// StudentCard Component
const StudentCard = ({ student }) => (
    <div className="border p-4 m-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transform transition-all duration-300">
      <h2 className="text-lg font-semibold text-gray-800">{student.name}</h2>
      <p className="text-gray-600">Age: {student.age}</p>
      <p className="text-gray-600">Marks: {student.marks}</p>
      <p className="text-gray-600">Roll Number: {student.rollNumber}</p>
      <p className="text-gray-600">Class: {student.class}</p>
      <p className="text-gray-600">City: {student.city}</p>
      <p className="text-gray-600">Attendance: {student.attendance}</p>
    </div>
  );
  
  export default StudentCard;
  