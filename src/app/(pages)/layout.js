import Link from "next/link"



function Layout({ children }) {
    return (

        <main className="flex w-full h-full shadow-lg bg-gray-100 min-h-screen">
            {children}
        </main>
    )
}

export default Layout