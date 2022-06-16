import { AppBar, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Clothing Store
        </Typography>
        <ShoppingCartIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
