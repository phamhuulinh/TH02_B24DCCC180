import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
  address: {
    city: string;
    street: string;
  };
  company: {
    name: string;
  };
}

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setStudent(res.data))
      .catch(() => console.error('Lỗi khi tải chi tiết sinh viên'));
  }, [id]);

  if (!student) return <p style={{ padding: 20 }}>Đang tải...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Thông tin chi tiết sinh viên</h2>
      <p><strong>Tên:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Điện thoại:</strong> {student.phone}</p>
      <p><strong>Website:</strong> {student.website}</p>
      <p><strong>Thành phố:</strong> {student.address.city}</p>
      <p><strong>Công ty:</strong> {student.company.name}</p>

      <button
        onClick={() => navigate('/students')}
        style={{
          marginTop: 10,
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: 5,
          padding: '6px 12px',
          cursor: 'pointer',
        }}
      >
        ← Quay lại danh sách
      </button>
    </div>
  );
};

export default StudentDetail;
