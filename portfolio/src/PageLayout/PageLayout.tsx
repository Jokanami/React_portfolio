import { Navbar, Nav, Container } from "react-bootstrap";
import {Outlet} from "react-router";

const PageLayout = () => {

    return (
        <>
            <Navbar bg={"black"} variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Brand href={"/"} >Mon Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={"ms-auto"}>
                            <Nav.Link href={"/contacts"}>Me contacter</Nav.Link>
                            <Nav.Link href={"/projects"}>Mes projets</Nav.Link>
                            <Nav.Link href={"/skills"}>Mes compétences</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet/>


        </>
    )

}

export default PageLayout;