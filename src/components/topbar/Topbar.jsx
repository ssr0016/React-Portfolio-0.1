import './topbar.scss'
import {Person, Mail } from '@material-ui/icons'

function Topbar( { menuOpen, setMenuOpen } ) {
  return (
    <div className={'topbar ' + (menuOpen && "active")} >
      <div className="wrapper">
          <div className="left">
              <a href="#intro" className='logo'>
                SSR.
              </a>
              <div className="itemContainer">
                <Person className='icon'/>
                <span>0946 227 6659</span>
              </div>
              <div className="itemContainer">
                <Mail className='icon'/>
                <span>samsonrecluta0016@gmail.com</span>
              </div>
          </div>

          <div className="right">
              <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                  <span className='line1'></span>
                  <span className='line2'></span>
                  <span className='line3'></span>
              </div>
          </div>

      </div>
    </div>
  )
}

export default Topbar