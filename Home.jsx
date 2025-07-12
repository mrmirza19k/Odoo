import { Link } from 'react-router-dom';

export default function Home() {
  const profiles = [
    { id: 1, name: 'Tabrej Ansari', rating: 4.8 },
    { id: 2, name: 'Shah Hussain', rating: 4.5 },
    { id: 3, name: 'Ritik Sagar', rating: 4.9 },
    { id: 3, name: 'Susmita kumari', rating: 4.9 },
    { id: 3, name: 'Aman', rating: 4.9 },
    { id: 3, name: 'Sahil', rating: 4.9 },
  ];

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h4">Skill Swap Platform</h1>
        <Link to="/login" className="btn btn-outline-primary">Login</Link>
      </div>

      <input className="form-control mb-4" placeholder="Search by skill..." />

      {profiles.map(p => (
        <div key={p.id} className="card mb-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title mb-1">{p.name}</h5>
              <small>⭐ Rating: {p.rating}</small>
            </div>
            <Link to={`/profile/${p.id}`} className="btn btn-primary">View</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
