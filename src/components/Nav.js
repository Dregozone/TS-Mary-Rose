import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <Link to="/"><div className="btn btn-sm btn-light">Home</div></Link>
        <Link to="/about"><div className="btn btn-sm btn-light">About</div></Link>
        <Link to="/join"><div className="btn btn-sm btn-light">Join</div></Link>
    </nav>
  )
}

export default Nav
