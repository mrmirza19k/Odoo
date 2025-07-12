import { useParams } from 'react-router-dom';
import { useState } from 'react';
import RequestForm from './RequestForm';

export default function PublicProfile() {
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mt-5" style={{ maxWidth: 600 }}>
      <h2>Marc Demo</h2>
      <p><strong>Skills Offered:</strong> Photoshop, Excel</p>
      <p><strong>Skills Wanted:</strong> Python</p>
      <p><strong>Rating:</strong> ⭐⭐⭐⭐☆</p>
      <button className="btn btn-primary mt-3" onClick={() => setShowForm(true)}>Request Swap</button>
      {showForm && <RequestForm />}
    </div>
  );
}
