import { AppBar, MenuItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="body2"
          sa={{ mr: 2, display: { xs: "none", md: "flex" } }}
        >
          React Hooks
        </Typography>

        <MenuItem>
          <Typography>
            <NavLink to="/useState">
              <h3>useState</h3>
            </NavLink>
          </Typography>
        </MenuItem>
        <MenuItem>
          <NavLink to="/useEffect">
            <h3>useEffect</h3>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/useRef">
            <h3>useRef</h3>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/useMemo">
            <h3>useMemo</h3>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/useCallBack">
            <h3>useCallBack</h3>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/useContext">
            <h3>useContext</h3>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/myHook">
            <h3>myHook</h3>
          </NavLink>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
