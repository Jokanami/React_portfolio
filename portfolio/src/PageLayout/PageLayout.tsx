import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router"
import {Outlet} from "react-router";

const PageLayout = () => {

    return (
        <>
            <Navbar bg={"black"} variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Mon Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={"ms-auto"}>
                            <Nav.Link as={Link} to="/contacts">Me contacter</Nav.Link>
                            <Nav.Link as={Link} to="/projects">Mes projets et formations</Nav.Link>
                            <Nav.Link as={Link} to="/skills">Mes compétences</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet/>


        </>
    )

}

export default PageLayout;