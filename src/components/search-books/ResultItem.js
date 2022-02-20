const ResultItem = ({item}) =>{
    const {id, epub, pdf, saleInfo, volumeInfo } = item;
    const {isEbook} = saleInfo;
    const {authors, categories, description, imageLinks, industryIdentifiers, language, pageCount, previewLink, publishedDate, publisher, subtitle, title} = volumeInfo
    console.log(imageLinks)
    return(
        <div className="shadow-card hover:shadow-hover transition-all duration-200 mb-30 flex flex-col justify-center items-center p-10 w-full sm:w-2/5 md:w-3/10">
            <h1 className="text-17 text-center pb-10">{title}</h1>
            {subtitle && <h3 className="text-14 text-center pb-5">{subtitle}</h3>}
            <h4 className="text-14 text-center pb-5">{authors.toString().replace(',', ', ')}, {publishedDate.slice(0,4)}</h4>
            <img className="rounded-sm w-100 my-20" src={imageLinks.smallThumbnail}></img>
            <button className="mb-10 capitalize py-2 px-15 md:px-15 text-peacock-blue text-17 transition-all duration-300 hover:bg-blueish">see more</button>
        </div>
    )
}

export default ResultItem;