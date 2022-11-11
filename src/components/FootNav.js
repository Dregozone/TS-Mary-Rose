import { Link } from 'react-router-dom'

const FootNav = () => {
  return (
    <nav>
      <Link to="/about"><div className="btn btn-sm btn-light">Unit courses</div></Link>
      <Link to="/join"><div className="btn btn-sm btn-light">Area courses</div></Link>
      <Link to="/about"><div className="btn btn-sm btn-light">National courses</div></Link>
      <Link to="/join"><div className="btn btn-sm btn-light">Local activities</div></Link>
      <Link to="/about"><div className="btn btn-sm btn-light">Unit organisation structure</div></Link>
    </nav>
  )
}

export default FootNav
