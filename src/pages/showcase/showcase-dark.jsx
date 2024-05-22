import React from "react";
import Navbar from "components/Navbar/navbar";
import ShowcasesFullScreen from "components/Showcases-full-screen/showcases-full-screen";
import DarkTheme from "layouts/Dark";

const ShowcaseDark = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
  
    var navbar = navbarRef.current;
  
    if (navbar) {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
  
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          navbar.classList.add("nav-scroll");
        } else {
          navbar.classList.remove("nav-scroll");
        }
      });
    }
  }, [fixedHeader, MainContent, navbarRef]);
  

  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ShowcasesFullScreen />
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Vie - Showcase Dark</title>
    </>
  )
}

export default ShowcaseDark;
