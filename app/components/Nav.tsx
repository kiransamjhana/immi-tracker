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
import Image from "next/image";

const Nav = () => {
  return (
    <div className="mt-1 mb-1">
      <Navbar fluid rounded className="bg-slate-100">
        <NavbarBrand href="#">
          <div className="logo ">
            {" "}
            <Image src="/log.png" alt="logo" width={300} height={300} />
          </div>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black"></span>
        </NavbarBrand>
        <div className="flex md:order-2 justify-start">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="avater settings"
                img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    </div>
  );
};

export default Nav;
