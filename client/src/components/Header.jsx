function Header() {
  return (
    <header style={styles.header}>
      <h2>🥛 Shukla Dairy</h2>
      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    background: "#2e7d32",
    color: "white"
  }
};

export default Header;
