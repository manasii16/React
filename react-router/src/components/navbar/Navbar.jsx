import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Outlet } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav className={styles.navbar}>
            <Link to="/home" className={styles.nav_link}>Home</Link>
            <Link to="/feedbackform/" className={styles.nav_link}>FeedbackForm</Link>
            <Link to="/feedbacklist" className={styles.nav_link}>Feedback List</Link>
        </nav>

        <div style={{ marginTop: 24, padding: 16 }}>
            <Outlet />
        </div>

    </div>
  );
}
