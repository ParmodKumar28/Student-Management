// StudentTable Component
const StudentTable = ({ students }) => (
    <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
      <table className="table-auto w-full border-separate border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-200 p-3 text-left">Name</th>
            <th className="border border-gray-200 p-3 text-left">Age</th>
            <th className="border border-gray-200 p-3 text-left">Marks</th>
            <th className="border border-gray-200 p-3 text-left">Roll Number</th>
            <th className="border border-gray-200 p-3 text-left">Class</th>
            <th className="border border-gray-200 p-3 text-left">City</th>
            <th className="border border-gray-200 p-3 text-left">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition-all duration-300 ease-in-out"
            >
              <td className="border border-gray-200 p-3">{student.name}</td>
              <td className="border border-gray-200 p-3">{student.age}</td>
              <td className="border border-gray-200 p-3">{student.marks}</td>
              <td className="border border-gray-200 p-3">{student.rollNumber}</td>
              <td className="border border-gray-200 p-3">{student.class}</td>
              <td className="border border-gray-200 p-3">{student.city}</td>
              <td className="border border-gray-200 p-3">{student.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  export default StudentTable;
  