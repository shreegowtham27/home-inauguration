export default function NavBar() {
    return(
        <div className="navbar bg-lime-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="navbar-start grow flex items-center">
                    <a className="text-2xl sm:text-3xl lg:text-4xl font-black font-drSugi">
                        Shree Bhavanam
                    </a>
                </div>
                <div className="navbar-end flex items-center">
                    <div className="dropdown">
                        <button
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                            aria-label="Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 sm:h-8 sm:w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-green-700 rounded-box z-[1] mt-3 w-48 sm:w-52 p-2 shadow"
                        >
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#venue">Venue Details</a>
                            </li>
                            <li>
                                <a href="#maps">Maps</a>
                            </li>
                            <li>
                                <a href="#contact">Send Your Wishes</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>    
    )
}