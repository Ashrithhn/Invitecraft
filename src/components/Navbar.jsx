function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">IC</span>
        <span className="navbar-title">InviteCraft</span>
      </div>
      <div className="navbar-actions">
        <button type="button" className="btn-ghost">
          New invitation
        </button>
      </div>
    </header>
  );
}

export default Navbar;