import { Link } from 'react-router-dom';

function Notfound() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <Link to="/">Go to Home</Link>
            <img src="https://lh3.googleusercontent.com/wlilI1WBxzBBvwzG3GDGEoINBwsEaLg4lmph02XVbs0ii0QDWfWEZmmXMPUH0uE_XATZD7NujZZSZ6fbZzSShXGm4Naf6MA1xD_wTXbeQ6zq8Fap31T3lcSRf8IVKoiJmr6ydqLeSmOP5TThRDPDF4I" alt="404 not found" width="800" height="400" />
        </div>
    );
}

export default Notfound;  