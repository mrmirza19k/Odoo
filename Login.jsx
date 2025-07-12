export default function Login() {
  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h2 className="mb-4">Login</h2>
      <input type="email" className="form-control mb-3" placeholder="Email" />
      <input type="password" className="form-control mb-3" placeholder="Password" />
      <button className="btn btn-success w-100">Login</button>
      <p className="mt-2 text-primary text-center" style={{ cursor: "pointer" }}>Forgot password?</p>
    </div>
  );
}
