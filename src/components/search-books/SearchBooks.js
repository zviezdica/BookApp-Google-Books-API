import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import searchBackground from "../../images/backgrounds/bookshelf.jpg";
import SearchIcon from "../../images/icons/search.png"
import NoResults from "../../images/icons/no-results.png"
import ResultItem from './ResultItem';
import SearchItemDetails from './SearchItemDetails';

const axios = require('axios');

const SearchBooks = () =>{
    const bigScreen = useMediaQuery({query:"(min-width: 768px)" })

    const [input, setInput] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [showResultsList, setShowResultsList] = useState(false)
    const [resultsList, setResultsList] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [searchResult, setSearchResult] = useState('');
    const [showDetails, setShowDetails] = useState('');

    //on changing search input
    const handleChange = (e) =>{
        setInput(e.target.value) 
    }

    //on search
    const handleSearch = (e) =>{
        if(e.key==='Enter'){
            setSearchValue(input);
            setInput('');
        }
        else return;
    }

    //'see more' about book
    const handleDetails = (id) =>{
        let item = searchResult.data.items.filter(item=>item.id === id)
        setShowDetails(item[0])

    }

    //get and show search result data
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

    //get and show results list
    useEffect(()=>{
        let apiRoot = 'https://www.googleapis.com/books/v1/volumes?q=';
        let apiSearchText = input.trim().replaceAll(' ', '+');
        if(apiSearchText.length>2){
            axios.get(apiRoot+apiSearchText)
            .then(response=> {
                if(response.data.items){
                    setResultsList(response)
                    setShowResultsList(true)
                    console.log(resultsList)
                }
                else{
                    setResultsList('')
                }   
            }) 
            .catch(error=> console.log(error))
            .then(()=> console.log('done'))
        }
        else setShowResultsList(false);
    },[input])


        return(
        <section className='pt-40 xs:pt-150'>
                <div className='relative pt-1/2 sm:pt-2/5 md:pt-1/3 bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${searchBackground})`}}>
                    <div className='bg-transparent-blue flex flex-col justify-center items-center absolute left-0 top-0 bottom-0 right-0'> 
                        <label htmlFor='searchBook' className='text-30 sm:text-35 md:text-45 text-white pb-10 sm:pb-15 md:pb-20' >Search for a book:</label>
                        <div className='p-2 md:p-3 bg-white container rounded-full w-9/10 xs:w-7/10 relative'>
                            <input className='w-full pl-50 rounded-full text-17 md:text-21 bg-contain bg-no-repeat bg-to-left' style={{backgroundImage:`url(${SearchIcon})`}}
                            type='text'
                            name='searchBook' 
                            id='searchBook'
                            onChange={handleChange}
                            onKeyPress={handleSearch}
                            value={input}
                            placeholder='e.g. Harry Potter'
                            ></input>
                            {showResultsList && <div className='absolute top-33 md:top-45 p-5 md:p-8 bg-white-opacity rounded-md'>
                            <ul>
                                {resultsList.data.items.slice(bigScreen?(0,0) :(0,5)).map((result) =>{
                                    return(
                                    <li className='p-3 text-14 md:text-16 hover:text-peacock-blue cursor-pointer' key={`list${result.id}`} onClick={()=>setShowDetails(result)}>{result.volumeInfo.title}</li>
                                    )
                                })}
                            </ul>
                        </div>}
                        </div>
                        
                    </div>
                </div>
                {showResults && <div className='container pt-20'>
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