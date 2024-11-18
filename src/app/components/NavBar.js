export default function NavBar() {
    return(
        <div className="navbar bg-lime-950">
            <div className="container mx-auto w-8/12">
            <div className="navbar-start grow flex-auto">
                <a className="btn btn-ghost text-4xl font-black font-drSugi">Shree Bhavanam</a>
            </div>
                <div className="flex-none">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-green-700 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Venue Details</a></li>
                            <li><a>Maps</a></li>
                            <li><a>Send Your Wishes</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}