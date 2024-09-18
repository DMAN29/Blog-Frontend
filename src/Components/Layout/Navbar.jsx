import { Button } from "@mui/material";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    display: "flex", // Add flexbox to position elements
    alignItems: "center", // Center items vertically
    justifyContent: "space-between", // Place search icon at the end
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingRight: `calc(1em + ${theme.spacing(4)})`, // Add padding to the right for the icon
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <div className="gradiant-main h-20 flex justify-between pr-10 items-center">
      <img
        className="h-full mix-blend-multiply"
        src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
        alt="Logo"
      />
      <div className="w-1/2 justify-between flex">
        <Button>HOME</Button>
        <Button>ABOUT</Button>
        <Button>CONTACT US</Button>
      </div>
      <div className="w-1/6 bg-gray-400">
        <Search>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Search>
      </div>
      <div className="flex items-center space-x-4">
        <div>User name</div>
        <img
          className="h-10 w-10 mix-blend-multiply bg-pink-500 rounded-full p-1 m-1"
          src="https://cdn-icons-png.flaticon.com/512/2206/2206368.png"
          alt="User"
        />
      </div>
    </div>
  );
};

export default Navbar;
