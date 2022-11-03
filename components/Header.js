import { useEffect, useState } from "react";
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

export default function Header(){

    const [isOpen, setIsopen] = useState(false);
    const [sticky, isSticky] = useState(false);
    
    const toogle = () => setIsopen(!setIsopen);

    function handleScroll(){
        if(window.scrollY > 90) {
            isSticky(true);
        } else {
            isSticky(false);
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
    });

    return (
        <div className={`header${sticky ? ' sticky' : ''}`}>
        <Navbar light expand="md">
          <Container>    
          {/* <NavbarBrand href="/">LOGO</NavbarBrand>         */}
            <NavbarToggler onClick={toogle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="m-auto" navbar>
                <NavItem className="font-title">
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem className="font-title">
                  <NavLink href="#feature">Features</NavLink>
                </NavItem>
                <NavItem className="font-title">
                  <NavLink href="#about">About</NavLink>
                </NavItem>
                <NavItem className="font-title">
                  <NavLink href="#mitra">Mitra</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );

}