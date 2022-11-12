import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

const logoRickMorty = "https://i0.wp.com/aldescubierto.org/wp-content/uploads/2021/07/Portada_RickyMorty_web.jpg?resize=800%2C445&ssl=1"
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <a className="navbar-brand" href="/"><img width="150px" src={logoRickMorty}></img></a>
        <div className="col-2 justify-content-end">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          Favourites
                        </button>
                        <ul className="dropdown-menu">    
                          {/* dentro de favoritos              */}
                        </ul>
                    </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;