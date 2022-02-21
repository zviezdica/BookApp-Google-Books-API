import { useEffect, useState } from 'react';
import searchBackground from "../../images/backgrounds/bookshelf.jpg";
import SearchIcon from "../../images/icons/search.png"
import NoResults from "../../images/icons/no-results.png"
import ResultItem from './ResultItem';
import SearchItemDetails from './SearchItemDetails';

const axios = require('axios');

const SearchBooks = () =>{
    const [input, setInput] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [searchResult, setSearchResult] = useState('');
    const [showDetails, setShowDetails] = useState('');

    const handleChange = (e) =>{
        setInput(e.target.value) 
    }

    const handleSearch = (e) =>{
        if(e.key==='Enter'){
            setSearchValue(input);
            setInput('');
        }
        else return;
    }

    const handleDetails = (id) =>{
        let item = searchResult.data.items.filter(item=>item.id === id)
        setShowDetails(item)
        console.log(showDetails)

    }

    useEffect(()=>{
        let apiRoot = 'https://www.googleapis.com/books/v1/volumes?q=';
        let apiSearchText = searchValue.trim().replaceAll(' ', '+');
        if(apiSearchText){
            axios.get(apiRoot+apiSearchText)
            .then(response=> {
                if(response.data.items){
                    setSearchResult(response)
                }
                else{
                    setSearchResult('')
                }   
                setShowResults(true)})
            .catch(error=> console.log(error))
            .then(()=> console.log('done'))
        }
        else return;
    },[searchValue])

        return(
        <section className='pt-40 xs:pt-150'>
                <div className='relative pt-1/2 sm:pt-2/5 md:pt-1/3 bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${searchBackground})`}}>
                    <div className='bg-transparent-blue flex flex-col justify-center items-center absolute left-0 top-0 bottom-0 right-0'> 
                        <label htmlFor='searchBook' className='text-30 sm:text-35 md:text-45 text-white pb-10 sm:pb-15 md:pb-20' >Search for a book:</label>
                        <div className='p-2 md:p-3 bg-white container rounded-full w-9/10 xs:w-7/10'>
                            <input className='w-full pl-50 rounded-full text-17 md:text-21 bg-contain bg-no-repeat bg-to-left' style={{backgroundImage:`url(${SearchIcon})`}}
                            type='text'
                            name='searchBook' 
                            id='searchBook'
                            onChange={handleChange}
                            onKeyPress={handleSearch}
                            value={input}
                            placeholder='e.g. Harry Potter'
                            ></input>
                        </div>
                    </div>
                </div>
                {showResults &&<div className='container pt-20'>
                        {!searchResult && <div className='flex justify-center items-center my-30'>
                            <div style={{backgroundImage:`url(${NoResults})`}} className='bg-contain bg-no-repeat bg-center h-50 w-50 mr-10'></div>
                            <h3 className='text-17'><b>No results!</b> Try something else.</h3>
                        </div>}
                        {searchResult && <div className='flex flex-wrap justify-evenly'>
                            {searchResult.data.items.map((item=>{
                                return(
                                    <ResultItem key={item.id} item={item} handleDetails={handleDetails}/>
                                )
                            }))}
                            </div>}
                </div>}
                {showDetails && <SearchItemDetails data={showDetails}/>}
            
            
        </section>
    )
}

export default SearchBooks;