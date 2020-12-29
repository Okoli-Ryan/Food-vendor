import { useState } from 'react'
import { Card, Container, Form } from 'react-bootstrap'
import { Menu } from './Data'
import Meats from '../../Image/Meats.jpeg'
//import FormCalender from './CalenderForm'
const ManageMenu = () => {
  const [hide, useShow] = useState(false)
  const [setDate, UseData] = useState('')
  const ToogleMenu = (e) => {
    console.log(e)
    useShow(!hide)

}
  const SuspendMeal = () => {
    console.log(setDate)
    useShow(false)
  }
    return(
<div className="main-panel">
      <Container fluid className="hurt">

        <div>
        <h3>Manage Menu</h3>
           </div>
    { Menu.map( (name,  i) => (
        <div className="mt-3 manage-menu" key={i}>
        <div className="toggle-menu">
                <div>
                  <img className="menu-img" src={Meats} alt="menu"/>
                </div>
                <div className="ml-3 w-moblie">
                  <h5>{name.menu}</h5>
                  <p>Served with choice of swallow (e.g poundo, eba, etc), and choice of protein (e.g goat meat, fish, assorted, etc)</p>
                </div>
                <div className="wde4 w-toggle">
                  <div>
      
                  <span className="ml-5 bold">£10.00</span>
                  </div>
                <div className="scssc">
                  <div className={`toggle-container ${!hide ? 'abled' : 't-disabled'}`}>
                  <span className={`dialog-button ${!hide ? '' :"disabled"}`} onClick={()=>ToogleMenu(name.id) /*(value)=> value.id === name.id ? ToogleMenu : console.log(value)*/}></span>
                    </div>
                  <p className="mt">toogle to suspend menu</p>
                  </div>
      
                  
                </div>
                </div>
                { !hide ? '' : (<>
                <hr className="f-15"/>
                
                <div className="form-toogle mt-3">
                  <div className="wde4" > How long do want suspend the menu?</div>
                  <div>
                <Form.Control type="date" placeholder="DD/MM/YYYY" className="change-input" onChange={(e) => UseData(e.target.value)}/>
                </div>
                <div> <input className="w-100 total" type="button" value="Save" onClick={SuspendMeal}/></div>
                </div>
                 </>
                )}
                
                </div>      

                
                  
      
    ))}
            
</Container>
</div>
    )
}
export default ManageMenu