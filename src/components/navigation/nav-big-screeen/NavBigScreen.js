import logoBlue from "../../../images/logo/logo-blue.png"

const NavBigScreen = () =>{
    return(
        <section className="container flex ">
            <div className="logo opacity-90 w-1/5">
                <div style={{backgroundImage:`url(${logoBlue})`}} className='h-70 w-70 bg-center bg-cover mx-auto'></div>
                <h4 className="uppercase text-dark-blue tracking-widest text-21 -my-10 text-center w-max mx-auto">libar</h4>
            </div>
            <div className="w-3/5 flex justify-evenly items-center">
                <div>
                    <h4 className="route-link">search books</h4>
                </div>
                <h4 className="route-link">home</h4>
                <h4 className="route-link">my bookshelf</h4>
            </div>
            <div className="w-1/5 relative">
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 px-15 border-2 rounded-sm border-solid border-dark-blue uppercase text-17 transition-all duration-300 hover:bg-dark-blue hover:text-white">log in</button>
            </div>
           
        </section>
    )
}

export default NavBigScreen;