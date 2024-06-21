import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, MenuProps } from "antd";
import { AppState } from "../store";
import { isLoggedIn } from "../store/actions/userActions";

type MenuItem = Required<MenuProps>["items"][number];

const { Header } = Layout;

function AppHeader() {
  const { data, loading, error } = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoggedIn());
  }, []);

  const { pathname } = useLocation();

  const items: MenuItem[] = [
    ...(data.username
      ? [
          {
            key: "/records",
            label: <Link to="/records">Payment Records</Link>,
          },
          {
            key: "/categories",
            label: <Link to="/categories">Categories</Link>,
          },
          {
            key: "/logout",
            label: <Link to="/logout">Logout</Link>,
          },
        ]
      : loading
      ? []
      : [
          {
            key: "/login",
            label: <Link to="/login">Login</Link>,
          },
        ]),
  ];

  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[pathname]}
        items={items}
      />
    </Header>
  );
}

export default AppHeader;
