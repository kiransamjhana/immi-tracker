import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const Nav = () => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black">
          Flowbite React
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 justify-start">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">kiran manandhar</span>
            <span className="block truncate text-sm font-medium">
              kiran@yahoo.com
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>ImmiTracker</DropdownItem>
          <DropdownItem>post</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
          <DropdownItem>Sign In</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse className="flex justify-start">
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Blogs</NavbarLink>
        <NavbarLink href="#">News</NavbarLink>
        <NavbarLink href="#">Story</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav;
