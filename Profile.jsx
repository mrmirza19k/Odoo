export default function Profile() {
  return (
    <div className="container mt-5" style={{ maxWidth: 600 }}>
      <h2 className="mb-4">Your Profile</h2>
      <input className="form-control mb-3" placeholder="Full Name" />
      <input className="form-control mb-3" placeholder="Location" />
      <input className="form-control mb-3" placeholder="Skills Offered (e.g., Photoshop, Excel)" />
      <input className="form-control mb-3" placeholder="Skills Wanted" />
      <select className="form-select mb-3">
        <option value="">Select Availability</option>
        <option>Weekends</option>
        <option>Evenings</option>
      </select>
      <select className="form-select mb-4">
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
      <button className="btn btn-success w-100">Save Profile</button>
    </div>
  );
}
