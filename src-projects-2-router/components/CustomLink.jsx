import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1
  });
  const setActive = match ? 'active-link' : ''

  return (
    <Link
      to={to}
      className={setActive}
      {...props}
    >
      {children}
    </Link>
  );
};

export { CustomLink };
