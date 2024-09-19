import { Outlet, Link } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <h1 className="p-4 font-bold">DefaultLayout</h1>
      <ul>
        <li>
          <Link to="/Header">Header</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
