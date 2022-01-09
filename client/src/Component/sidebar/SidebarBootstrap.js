import { slide as Menu } from "react-burger-menu";
import "./sidebarStyle.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import RegistrationModal from "../registrationModal/RegistrationModal";
import { FaHome, FaQuestion, FaPhoneAlt, FaSignInAlt } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
// import Offcanvas from "react-bootstrap/Offcanvas";

function SidebarBootstrap() {
  const [showModal, setModal] = useState(false);
  const [logIn, setLogIn] = useState(true);
  const [page, setPage] = useState("home");
  // const [show, setShow] = useState(false);

  const fireModal = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };
  const handleLogIn = () => {
    setLogIn(true);
  };
  const handleLogOut = () => {
    setLogIn(false);
  };

  const pageClick = (page) => {
    console.log(page);
    setPage(page);
  };

  // const handleCloseSidebar = () => setShow(false);
  // const handleShowSidebar = () => setShow(true);

  return (
    <div id="outer-container">
      {/* <Button variant="primary" onClick={handleShowSidebar}>
        Launch
      </Button>
      <Offcanvas
        placement="end"
        scroll={true}
        show={show}
        onHide={handleCloseSidebar}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
      <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <main id="page-wrap">
          <Button
            id="home"
            className={`menu-item ${page === "home" ? "acitve" : ""}`}
            href="/"
            onClick={(e) => pageClick(e.target.id)}
          >
            <FaHome className="fa fa-home" />
            <br />
            الرئيسية
          </Button>
          <Button
            id="program"
            className={`menu-item ${page === "program" ? "acitve" : ""}`}
            // href="/program"
            onClick={(e) => pageClick(e.target.id)}
          >
            <TiGroup className="fa fa-users" aria-hidden="true" />
            <br />
            برامجنا
          </Button>
          <Button
            id="about"
            className={`menu-item ${page === "about" ? "acitve" : ""}`}
            onClick={(e) => pageClick(e.target.id)}
          >
            <FaQuestion className="fa" />
            <br />
            عن معمور
          </Button>
          <Button
            id="contact"
            className={`menu-item ${page === "contact" ? "acitve" : ""}`}
            // href="/contact"
            onClick={(e) => pageClick(e.target.id)}
          >
            <FaPhoneAlt className="fa fa-phone" aria-hidden="true" />
            <br />
            تواصل معنا
          </Button>
          <Button
            id="setting"
            className={`menu-item ${page === "setting" ? "acitve" : ""}`}
            onClick={fireModal}
          >
            {/* {logIn ? (
              <div
              // onClick={handleLogIn}
              >
                <i className="fa fa-cog" aria-hidden="true"></i>
                <br />
                إعدادات الحساب
              </div>
            ) : ( */}
            <div>
              <FaSignInAlt className="fa fa-sign-in" aria-hidden="true" />
              <br />
              تسجيل الدخول
            </div>
            {/* )} */}
          </Button>
        </main>
      </Menu>
      <RegistrationModal
        showModal={showModal}
        logIn={logIn}
        handleClose={handleClose}
        handleLogIn={handleLogIn}
        handleLogOut={handleLogOut}
      />
    </div>
  );
}

export default SidebarBootstrap;
