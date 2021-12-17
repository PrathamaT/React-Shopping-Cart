//Navigation bar which includes name,a search bar and cart

const Nav = (props) => {
  const search = (e) => {
    props.searchByName(e.target.value);
  };
  return (
    <nav>
      <div className="nav__left">Fyndiq</div>
      <div className="nav__middle">
        <div className="input__wrapper">
          <input type="text" onChange={search} placeholder="Search..." />
        </div>
      </div>
      <div className="nav__right">
      </div>
    </nav>
  );
};

export default Nav;
