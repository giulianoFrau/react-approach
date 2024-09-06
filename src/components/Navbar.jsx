import React from 'react'
import './Navabar.css'
import NavBarLinks from './NavBarLinks'
const Navbar = () => {
  return (
    <ul>
        <li><NavBarLinks></NavBarLinks></li>
        <li><NavBarLinks></NavBarLinks></li>
        <li><NavBarLinks></NavBarLinks></li>

     {/* In react posso scrivere dentro i tag del componente: { <li><NavBarLinks>CIAO SONO SCRITTO DENTRO IL COMPONENTE</NavBarLinks></li>
     La differenza è che dentro il componente vero e proprio nella funzione  NavBarLinks = () =>
     devo passarli il parametro {children}  NavBarLinks = ({children})
     QUESTO DEVE VALERE PER TUTTI GLI ELEMENTI, se no mi fa vedere solamente quelli che hanno un children.
     Funziona tipo PROPS*/}
    </ul>
  )
}

export default Navbar
