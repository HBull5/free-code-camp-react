/**
 * React is declarative, you describe to the computer what you want and it handles the details for you. 
 */
// function Navbar() {
//     return(
//         <nav className="navbar navbar-expand-lg bg-light">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#">Navbar</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                     <li className="nav-item">
//                     <a className="nav-link active" aria-current="page" href="#">Home</a>
//                     </li>
//                     <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                     </li>
//                     <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                         Dropdown
//                     </a>
//                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                         <li><a className="dropdown-item" href="#">Action</a></li>
//                         <li><a className="dropdown-item" href="#">Another action</a></li>
//                         <li><hr className="dropdown-divider"></hr></li>
//                         <li><a className="dropdown-item" href="#">Something else here</a></li>
//                     </ul>
//                     </li>
//                     <li className="nav-item">
//                     <a className="nav-link disabled">Disabled</a>
//                     </li>
//                 </ul>
//                 <form className="d-flex" role="search">
//                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success" type="submit">Search</button>
//                 </form>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// function MainContent() {
//     return(
//         <div className="container p-5">
//             <h1 className="mb-3">My Awesome Main Content</h1>
//             <p>lorem ipsum dolor.</p>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>
// );

/**
 * Imparative would be vanilla JS, this is where you have to go trough the trouble of describing those details. 
 */
const root = document.querySelector('#root');
const h1 = document.createElement('h1');
h1.textContent = 'Hello from Vanilla JS';
h1.classList.add('header'); 
root.appendChild(h1);