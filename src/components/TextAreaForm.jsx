const TextAreaForm = ({id, labelText, placeholder, valueInput, onChange}) => {
  return (
    <div className='mb-5'>
          <label htmlFor={id} className="block text-gray-700 uppercase font-bold">{labelText}</label>
          <textarea 
            id={id} 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={valueInput} 
            placeholder={placeholder}
            onChange={onChange}></textarea>
    </div>
  )
}

export default TextAreaForm