import Link from "next/link"
import NavbarUI from "../_components/navbar/NavbarUI"



function Layout({ children }) {
    return (
       <>
        {/* <NavbarUI />     */}
        <main className="flex w-full h-full shadow-lg bg-gray-100 min-h-screen">
                  
            {children}            
        </main>
       </>
    )
}

export default Layout