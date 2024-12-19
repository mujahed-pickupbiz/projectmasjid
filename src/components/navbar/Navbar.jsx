import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
  'Home',
  'About',
  'Contact',
  'Services',
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);  // State to control the menu's open/close
  const open = Boolean(anchorEl);  // Whether the menu is open or not

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);  // Opens the menu and sets the anchor to the clicked button
  };

  const handleClose = () => {
    setAnchorEl(null);  // Closes the menu by resetting the anchor element to null
  };

  return (
    <div className="bg-white border-b p-4 shadow-md">
      {/* Main Navigation Bar Layout */}
      <div className="flex justify-between items-center">
        {/* Logo and Navigation Links */}
        <div className="flex items-center space-x-6">
          <a href="/">
          <span className="font-bold text-4xl lg:ml-20 text-gray-800">Hotel.<sub className="text-sm">com</sub></span>
          </a>
          <span className="px-4 py-2 font-semibold  cursor-pointer  transition">Shop Travel</span>
        </div>

        {/* Get the App Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hidden md:block hover:bg-blue-600 transition">
          Get the app
        </button>

        {/* Desktop Navigation Links (visible on larger screens) */}
        <div className="hidden lg:flex space-x-8">
          <a href="" className="text-sm text-gray-800 hover:text-blue-500 transition">Home</a>
          <a href="" className="text-sm text-gray-800 hover:text-blue-500 transition">About</a>
          <a href="" className="text-sm text-gray-800 hover:text-blue-500 transition">Services</a>
          <a href="" className="text-sm text-gray-800 hover:text-blue-500 transition">Forms</a>
          <a href="" className="text-sm text-gray-800 hover:text-blue-500 transition">Contact</a>
        </div>

        {/* Mobile Menu Icon (Hamburger Menu for Mobile) */}
        <div className="lg:hidden">
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          
          {/* Dropdown Menu for Mobile */}
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                style: {
                  width: '20ch',
                },
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} onClick={handleClose} className="cursor-pointer text-gray-800 hover:bg-gray-200 transition">
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
