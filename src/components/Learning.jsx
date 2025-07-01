import React,{useRef, useState, useDeferredValue} from 'react'

function Learning() {
    const [filtered, setFiltered] = useState([]);
    const [query, setQuery] = useState('');
    const inputref = useRef();
    const handleChange = () => {
        console.log(inputref.current.value);
    }
    const defferedQuery = useDeferredValue(query)
    const items = Array.from({length: 100000}, (_, i) => `Item_${i + 1}`);

    let filterdItems = items.filter(item=>item.toLowerCase().includes(defferedQuery.toLowerCase()))
    
    // setFiltered(filterdItems);
  return (
    <>
    <h1>Learning</h1>
    <input type="text" ref={inputref} onChange={(e)=>setQuery(e.target.value)} />
    <h1>{inputref.current?.value}</h1>
    {query != defferedQuery&& <p>Searching...</p>}
    {filterdItems.map((item, index) => (
        <div key={index}>
            {item}
        </div>
    ))}
    </>
  )
}

export default Learning