import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";
import { Button } from "react-bootstrap";

export const Navbaar = () => {
  const handleResumeClick = () => {
    // First open in new tab
    const viewUrl = "https://drive.google.com/file/d/1J3urmc02x3CArWNPchg1DbeChAQ-tzH5/view";
    window.open(viewUrl, '_blank');

    // Then trigger download
    const fileId = "1J3urmc02x3CArWNPchg1DbeChAQ-tzH5";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'Shubham_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000); // Delay of 1 second before download starts
  };

  return (
    <div className="navbar-container">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        id="navbar"
        className="animate-navbar nav-theme justify-content-between"
      >
        <Container>
          <Navbar.Brand>
            <Button
              className="m-2"
              variant="success"
              onClick={handleResumeClick}
            >
              Resume
              <i className="fa fa-download ms-2"></i>
            </Button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link eventKey={2} href="#about">
                About
              </Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link eventKey={2} href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
