import sccLogo from '../imgs/sccLogo.png'

const Header = () => {
  return (
    <header>
        <div>
            <img 
                src={sccLogo} 
                alt="Sea Cadet Corps Logo" 
                className="sccLogo"    
            />
        </div>

        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            margin: '1% 10%',
            width: '80%',
            fontSize: '140%',    
        }}>
            <div>
                Basingstoke
            </div>
            <div>
                T.S. Mary Rose (585)
            </div>
        </div>
    </header>
  )
}

export default Header
