import { useState } from 'react';
import searchBackground from "../../images/backgrounds/bookshelf.jpg";
import SearchIcon from "../../images/icons/search.png"

const axios = require('axios');

const SearchBooks = () =>{
    const [input, setInput] = useState('');

    const handleChange = (e) =>{
        setInput(e.target.value)
        console.log(input)
    }

    // axios.get('https://www.googleapis.com/books/v1/volumes?q=mind&key=AIzaSyAV9T3n8UlKfMG45ATLTTFSSAnsDoCI8ik')
    //     .then(response=> console.log(response))
    //     .catch(error=> console.log(error))
    //     .then(()=> console.log('done'))
    
    
        return(
        <section className='pt-40 xs:pt-150'>

                <div className='relative pt-1/2 sm:pt-2/5 md:pt-1/3 bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${searchBackground})`}}>
                    <div className='bg-transparent-blue flex flex-col justify-center items-center absolute left-0 top-0 bottom-0 right-0'> 
                        <label htmlFor='searchBook' className='text-30 sm:text-35 md:text-45 text-white pb-10 sm:pb-15 md:pb-20' >Search for a book:</label>
                        <div className='p-2 md:p-3 bg-white container'>
                            <input className='w-full rounded-sm text-17 md:text-21 bg-contain bg-no-repeat bg-right' style={{backgroundImage:`url(${SearchIcon})`}}
                            type="text"
                            name='searchBook' 
                            id='searchBook'
                            onChange={handleChange}
                            value={input}
                            ></input>
                        </div>
                    </div>
                </div>
            
            
        </section>
    )
}

export default SearchBooks;