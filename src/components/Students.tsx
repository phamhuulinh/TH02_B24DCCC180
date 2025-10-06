import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Student {
  id: number;
  name: string;
  email: string;
}

const Students: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => setStudents(res.data))
      .catch(() => console.error('Lỗi khi tải danh sách sinh viên'));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách sinh viên</h2>
      <ul>
        {students.map(sv => (
          <li key={sv.id}>
            <Link 
                to={`/students/${sv.id}`} 
                style={{ fontWeight: 'bold', color: '#3009daff', cursor: 'pointer', textDecoration: 'none', fontSize: '18px' }}
                >
                {sv.name}
            </Link> 
            - {sv.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
