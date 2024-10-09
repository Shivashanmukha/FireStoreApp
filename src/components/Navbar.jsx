// import {useContext} from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import useAuth from '../hooks/useAuth'
// import useCart from '../hooks/useCart'
// import { ThemeContext } from '../store/DarkModecontext'

// const Navbar = () => {
//     const[collapsed,setCollapsed]=useState(false)
//     console.log(collapsed) //false
//     const [searchTerm, setSearchTerm] = useState('');
//     const navigate = useNavigate();
    
//     // darkmode and lightmode context
//     const { theme, toggleTheme } = useContext(ThemeContext);

//    // function which makes false value to true value when button is clicked
//     let showToggle=()=>{
//         setCollapsed(!collapsed)
//     }

//     // 
//     const {isLoggedIn, isloading, isUserlogged, signOut}=useAuth()
//     console.log(isLoggedIn)

//     // cart-icon value
//     const {iconTotal}=useCart()

//     const handleSignout=async()=>{
//         // try {
//         //     let success=await signOut()
//         //     if(success){
//         //         console.log("user logged out")
//         //     }else{
//         //         console.log("failed to log")
//         //     }
//         // } catch (error) {
//         //     console.log(error)
//         // }
//         let success=await signOut()
//         if(success){
//             console.log("done")
//         }
//     }

//     // const handleSearch = (event) => {
//     //     event.preventDefault();
//     //     // You can implement the search logic here
//     //     console.log("Searching for:", searchTerm);
//     // };
//     const handleSearch = (event) => {
//         event.preventDefault();
//         // Navigate to the shop page with the search term as a query parameter
//         if (searchTerm) {
//             navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
//         }
//     };

//     if(isloading){
//         return null
//     }

//   return (
//     <>
//         <nav className={`navbar navbar-expand-lg ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
//             <div className="container-fluid">
//                 <NavLink className="navbar-brand text-success fs-5 fw-bold">Fire<span style={{color:"orangered"}}>StoreApp</span></NavLink>
//                 <button className="navbar-toggler" type="button" onClick={showToggle} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className={`collapse navbar-collapse ${!!collapsed && "show"}`} id="navbarSupportedContent">
//                     <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center mt-1">
//                         <li className="nav-item">
//                             <NavLink to={'/'} className="nav-link" aria-current="page">Home</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink to={'/about'} className="nav-link">About</NavLink>
//                         </li>
//                         {/* <li className="nav-item dropdown">
//                             <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                             Dropdown
//                             </NavLink>
//                             <ul className="dropdown-menu">
//                                 <li><NavLink className="dropdown-item">Action</NavLink></li>
//                                 <li><NavLink className="dropdown-item">Another action</NavLink></li>
//                                 <li><hr className="dropdown-divider"/></li>
//                                 <li><NavLink className="dropdown-item">Something else here</NavLink></li>
//                             </ul>
//                         </li> */}
//                         <li className="nav-item">
//                             <NavLink to={'/shop'} className="nav-link">Shop</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink to={'/contact'} className="nav-link">Contact</NavLink>
//                         </li>
//                     </ul>
//                 {/* <form className="d-flex" role="search">
//                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                     <button className="btn btn-outline-success" type="submit">Search</button>
//                 </form> */}
//                 {/* Logins start */}
//                     {/* Search Form */}
//                     <form className="d-flex" role="search" onSubmit={handleSearch}>
//                         <input
//                             className="form-control me-2"
//                             type="search"
//                             placeholder="Search"
//                             aria-label="Search"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                         <button className="btn btn-outline-success" type="submit">Search</button>
//                     </form>
                    
//                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
//                         <div className={`app ${theme}`}>
//                             {/* <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1> */}
//                             <button onClick={toggleTheme} className="btn btn-success my-1">
//                                 {theme === 'light' ? (
//                                 <>
//                                     <i className="bi bi-moon-fill"></i>
//                                 </>
//                                 ) : (
//                                 <>
//                                     <i className="bi bi-sun-fill"></i>
//                                 </>
//                             )}
//                             </button>
//                         </div>

//                         {/* cart Start */}
//                         <li className="nav-item px-1 mt-1">
//                             <NavLink className="btn btn-outline-primary" to={'/cart'}><i className="bi bi-bag"></i>{iconTotal!==0?iconTotal:null}</NavLink>
//                         </li>
//                         {/* cart end */}

//                         {/* <li className="nav-item px-1 mt-1">
//                             <NavLink className="btn btn-outline-primary" to={'/login'}>SignIn</NavLink>
//                         </li> */}
//                         {isLoggedIn?(
//                             <li className="nav-item px-1 mt-1">
//                             <button className="btn btn-outline-success" onClick={()=>handleSignout()}>logout</button>
//                         </li>
//                         ):(
//                         <li className="nav-item px-1 mt-1">
//                             <NavLink className="btn btn-outline-primary" to={'/login'}>SignIn</NavLink>
//                         </li>
//                         )}
//                         {/* <li className="nav-item mt-1">
//                             <NavLink className="btn btn-outline-success" to={'/register'}>Register</NavLink>
//                         </li> */}
//                     </ul>
//                 {/* Logins end */}
//                 </div>
//             </div>
//         </nav>
//     </>
//   )
// }

// export default Navbar

import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useCart from '../hooks/useCart';
import useProduct from '../hooks/useProduct'; // Import the useProduct hook
import { ThemeContext } from '../store/DarkModecontext';

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    // const [showDropdown, setShowDropdown] = useState(false);

    // Get products using useProduct hook
    const { product, isLoading, isError } = useProduct();

    const navigate = useNavigate();
    // Dark mode and light mode context
    const { theme, toggleTheme } = useContext(ThemeContext);

    // Authentication states
    const { isLoggedIn, isloading, signOut } = useAuth();
    const { iconTotal } = useCart();

    const handleSignout = async () => {
        let success = await signOut();
        if (success) {
            console.log("done");
        }
    };

    const showToggle = () => {
        setCollapsed(!collapsed);
    };

    // // Filter products based on search term
    // const filteredProducts = Array.isArray(product)
    //     ? product.filter((item) =>
    //         item.name.toLowerCase().includes(searchTerm.toLowerCase())
    //       )
    //     : [];

    // Function to handle search
    const handleSearchChange = (event) => {
        const searchValue = event.target.value;
        setSearchTerm(searchValue);

        // Filter products based on the search value
        const filtered = product.filter(item =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    // Navigate to the product's page when an item is selected
    const handleProductClick = (id) => {
        setSearchTerm(''); // Clear the search term after selection
        setFilteredProducts([]); // Clear the search results
        navigate(`/product/${id}`);
    };

    return (
        <>
            <nav className={`navbar navbar-expand-lg ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-success fs-5 fw-bold">Fire<span style={{ color: "orangered" }}>StoreApp</span></NavLink>
                    <button className="navbar-toggler" type="button" onClick={() => setCollapsed(!collapsed)} aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${collapsed ? "show" : ""}`}>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <NavLink to={'/FireStoreapp'} className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/about'} className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/shop'} className="nav-link">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/contact'} className="nav-link">Contact</NavLink>
                            </li>
                        </ul>

                        {/* Search Form */}
                        <form className="d-flex position-relative" style={{ width: '300px' }}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            {/* Dropdown for search results */}
                            {searchTerm && (
                                <div className="dropdown-menu show position-absolute" style={{ top: '100%', width: '100%', zIndex: 10 }}>
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map((item) => (
                                        <div
                                            key={item.id}
                                            className="dropdown-item"
                                            onClick={() => handleProductClick(item.id)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {item.name}
                                        </div>
                                        ))
                                    ) : (
                                    <div className="dropdown-item">No results found</div>
                                    )}
                                </div>
                            )}
                        </form>

                        {/* Cart and Auth */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                            <div className={`app ${theme}`}>
                                <button onClick={toggleTheme} className="btn btn-success my-1">
                                    {theme === 'light' ? (
                                        <i className="bi bi-moon-fill"></i>
                                    ) : (
                                        <i className="bi bi-sun-fill"></i>
                                    )}
                                </button>
                            </div>

                            <li className="nav-item px-1 mt-1">
                                <NavLink className="btn btn-outline-primary" to={'/cart'}>
                                    <i className="bi bi-bag"></i>
                                    {iconTotal !== 0 ? iconTotal : null}
                                </NavLink>
                            </li>

                            {isLoggedIn ? (
                                <li className="nav-item px-1 mt-1">
                                    <button className="btn btn-outline-success" onClick={handleSignout}>Logout</button>
                                </li>
                            ) : (
                                <li className="nav-item px-1 mt-1">
                                    <NavLink className="btn btn-outline-primary" to={'/login'}>SignIn</NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;




