function Header() {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        position: "sticky",
        top: 0,
        backgroundColor: "skyblue",
      }}
    >
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </div>
  );
}

export default Header;
