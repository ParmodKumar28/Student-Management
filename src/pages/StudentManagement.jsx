import { useState, useEffect } from 'react';
import { getStudents } from '../data/getStudents';
import StudentCard from '../components/StudentCard';
import StudentTable from '../components/StudentTable';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';

// StudentManagement Component
const StudentManagement = () => {
    const [students, setStudents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(false);

    const pageSize = 10;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await getStudents(pageSize, currentPage);
            setStudents(data);
            setLoading(false);
        };

        fetchData();
    }, [currentPage]);

    const totalPages = Math.ceil(100 / pageSize); // Assuming 100 students in total

    return (
        <div className="p-6 max-w-screen-2xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Student Management</h1>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {isMobile ? (
                        <div className="grid grid-cols-1 gap-4">
                            {students.map((student, index) => (
                                <StudentCard key={index} student={student} />
                            ))}
                        </div>
                    ) : (
                        <StudentTable students={students} />
                    )}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </>
            )}
        </div>
    );
};

export default StudentManagement;
