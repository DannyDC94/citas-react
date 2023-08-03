const InputForm = ({id, labelText, typeInput, valueInput, placeholder, onChange}) => {
  return (
    <div className='mb-5'>
          <label htmlFor={id} className="block text-gray-700 uppercase font-bold">{labelText}</label>
          <input 
            id={id} 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type={typeInput} 
            value={valueInput} 
            placeholder={placeholder}
            onChange={onChange}/>
    </div>
  )
}

export default InputForm