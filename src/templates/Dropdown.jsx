const Dropdown = ({ title, options, func }) => {
  return (
    <div className='select'>
            <select defaultValue="0" onChange={func} name="format" id="format">
                <option value="0" disabled>
                    {title}
                </option>
                {options.map((o) => (
                  <option value={o} key={o.id}>
                    {o.toUpperCase()}
                  </option>
                ))}
            </select>
        </div>
  )
}

export default Dropdown