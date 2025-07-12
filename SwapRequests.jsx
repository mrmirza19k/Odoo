export default function SwapRequests() {
  const swaps = [
    { id: 1, name: "Marc Demo", status: "Pending" },
    { id: 2, name: "John Doe", status: "Rejected" }
  ];

  return (
    <div className="container mt-5" style={{ maxWidth: 600 }}>
      <h2 className="mb-4">Swap Requests</h2>
      {swaps.map(s => (
        <div key={s.id} className="card mb-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">{s.name}</h5>
              <p className="mb-0"><strong>Status:</strong> {s.status}</p>
            </div>
            {s.status === "Pending" && (
              <div className="d-flex gap-2">
                <button className="btn btn-success btn-sm">Accept</button>
                <button className="btn btn-danger btn-sm">Reject</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
