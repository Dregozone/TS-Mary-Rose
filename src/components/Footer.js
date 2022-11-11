const Footer = () => {

  const year = (new Date()).getFullYear()
  const rcn = '288956'
  const tel = '01256 335 893'
  const address = '?'

  return (
    <footer>
        
        <div>
            Address: {address}
        </div>

        <div>
            Tel.: {tel}
        </div>

        <div>
            <abbr title="Registered Charity Number">RCN</abbr>: 
            <span> {rcn}</span>
        </div>

        <div className="center">
            <small>
                The Marine Society and Sea Cadets
                <br />
                Copyright &copy; {year}
            </small>
        </div>

    </footer>
  )
}

export default Footer
