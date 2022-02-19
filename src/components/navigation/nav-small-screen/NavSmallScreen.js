import { useState } from "react";
import { Link } from "react-router-dom";
import logoBlue from "../../../images/logo/logo-blue.png"

const NavSmallScreen = () =>{
    const [isNavOpened, setIsNavOpened] = useState(false)
    return(
        <section className="container flex justify-between items-center border-2 border-solid border-red py-10">
                    <div className="logo w-max opacity-90">
                        <Link to="/" >
                            <div style={{backgroundImage:`url(${logoBlue})`}} className='h-50 w-50 xs:h-70 xs:w-70 bg-center bg-cover mx-auto'></div>
                            <h4 className="uppercase text-dark-blue tracking-widest text-17 -my-10 text-center w-max mx-auto">libar</h4>
                        </Link>
                    </div>
                    <div onClick={()=>setIsNavOpened(!isNavOpened)} className={"nav-icon w-40 h-30 xs:w-65 xs:h-45 relative rotate-0 transition-all cursor-pointer opacity-90 " + (isNavOpened? "open" : "")}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                
        </section>
    )
}

export default NavSmallScreen;