import { Avatar, Button, Dropdown, DropdownItem, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
import { useSelector } from 'react-redux';

const Header = () => {

        const path = useLocation().pathname;
        const { currentUser } = useSelector(state => state.user)
  return (
    <div>
        <Navbar className="border-b-2">
            <Link
                to="/"
                className='self-center text-sm sm:text-xl font-bold dark:text-white'
                >
                <span className="">
                    Blog
                </span>
                <span className="text-sm sm:text-2xl text-violet-500">
                    Nest
                </span>
            </Link>

            <form>
            <TextInput
            type= "text"
            placeholder='Search'
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
            />
            </form>

            <Button className="w-12 h-10 lg:hidden" color="gray" pill>
            <AiOutlineSearch/> 
            </Button>
            
            <div className="flex gap-2 md:order-2">
                <Button
                className='w-12 h-10 hidden sm:inline'
                color="gray"
                pill
                >
                     <FaMoon />
                    </Button>
                    {currentUser ? (
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar
                                    alt="user"
                                    img={currentUser.profilePicture}
                                    rounded
                                />
                            }
                        >
                            <Dropdown.Header>
                                <span className='block text-sm'>@{currentUser.username}</span>
                                <span className='block text-sm front-medium truncate'>
                                    {currentUser.email}</span>
                            </Dropdown.Header>
                            <Link to={'/dashboard?tab=profile'}>
                                <DropdownItem>Profile</DropdownItem>
                            </Link>
                       <Dropdown.Divider/>
                       <DropdownItem>Sign Out</DropdownItem>
                        </Dropdown>
                    ) : (
                        <Link to="/sign-in">
                            <Button color="purple" outline>
                                Sign In
                            </Button>
                </Link>
            )
        }
    
                <Navbar.Toggle />
            </div>

            <Navbar.Collapse>
                <Navbar.Link active={path == "/"} as={"div"}>
                    <Link to="/">Home</Link>
                </Navbar.Link>

                <Navbar.Link active={path == "/about"} as={"div"}>
                    <Link to="/about">About</Link>
                </Navbar.Link>

                <Navbar.Link active={path == "/projects"} as={"div"}>
                    <Link to="/projects">Project</Link>
                </Navbar.Link>

            </Navbar.Collapse>

        </Navbar>
    </div>
  )
}

export default Header