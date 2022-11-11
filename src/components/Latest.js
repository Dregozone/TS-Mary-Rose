const Latest = ({ latest }) => {
  return (
    <div className="latest">
        <h2>Latest News</h2>

        {
            latest.map((item, key) => 
                <div 
                    key={key}
                    id={ "latest-" + key }
                    className="latestItem"    
                >
                    <h3>{item.header}</h3>
                    <p>
                        {item.text}
                    </p>
                </div>
            )
        }
    </div>
  )
}

export default Latest
