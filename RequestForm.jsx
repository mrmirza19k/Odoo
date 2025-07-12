export default function RequestForm() {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Send Swap Request</h5>
        <select className="form-select mb-2">
          <option>Select your offered skill</option>
          <option>Photoshop</option>
        </select>
        <select className="form-select mb-2">
          <option>Select skill you want</option>
          <option>Python</option>
        </select>
        <textarea className="form-control mb-2" placeholder="Message (optional)" rows="4"></textarea>
        <button className="btn btn-success">Submit Request</button>
      </div>
    </div>
  );
}
