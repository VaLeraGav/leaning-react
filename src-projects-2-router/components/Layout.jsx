import { NavLink, Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink'

// const setActive = ({ isActive }) =>  isActive ? 'active-link' : '';

const Layout = () => {
  return (
    <>
      <header>
        {/* <NavLink to="/" end  className={setActive}>Home</NavLink> */}
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">2021</footer>
    </>
  );
};

export { Layout };
