import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      <div className="footer-container">
        <Link to="/home" className={location.pathname === '/home' ? 'footer-item selected' : 'footer-item'}>
          <i className="fas fa-home"></i>
          <p>Home</p>
        </Link>
        <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'footer-item selected' : 'footer-item'}>
          <i className="fas fa-tachometer-alt"></i>
          <p>Dashboard</p>
        </Link>
        <Link to="/reports" className={location.pathname === '/reports' ? 'footer-item selected' : 'footer-item'}>
          <i className="fas fa-file-alt"></i>
          <p>Reports</p>
        </Link>
        <Link to="/profiles" className={location.pathname === '/profiles' ? 'footer-item selected' : 'footer-item'}>
          <i className="fas fa-users"></i>
          <p>Profiles</p>
        </Link>
        <Link to="/settings" className={location.pathname === '/settings' ? 'footer-item selected' : 'footer-item'}>
          <i className="fas fa-cog"></i>
          <p>Settings</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;