import { useEffect } from "react";
import { Menu, School } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "./ui/button";
import DarkMode from "@/darkMode";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "@/features/api/authApi";

import { toast } from "sonner";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { user } = useSelector((store) => store.auth);

  const navigate = useNavigate();
  const [logout, { data, isSuccess }] = useLogoutMutation();

  useEffect(() => {
    isSuccess && toast.success(data.message || "User Logged out.");
  }, [isSuccess]);

  console.log("logout", logout);

  const logoutHandler = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <div
      className="h-16 dark:bg[#0A0A0A] bg-white border-b
                dark:border-b-gray-800 border-b-gray-200 fixed
                top-0 left-0 right-0 duration-200 z-10"
    >
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 heigh-full">
        <div className="flex gap-2 items-center">
          <School size={"30"} />
          <h1 className="hidden md:block font-extraboald text-2xl">
            E-Learning
          </h1>
        </div>
        <div className="flex items-center gap-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage
                    src={user.photoUrl || "https://github.com/shadcn.png"}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="my-learning">My Learning</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="profile">Edit Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logoutHandler}>
                  Log out
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline">Login</Button>
              <Button>SignUp</Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>
      {/* Mobile NavBar */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <h1 className="font-extraboald text-2xl">E-Learning</h1>
        <MobileNavbar />
      </div>
    </div>
  );
};

export default NavBar;

const MobileNavbar = () => {
  let role = "instructor";
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Button
            size="icon"
            className="rounded-full bg-gray-200 hover:bg-gray-200"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetHeader className="flex flex-row items-center justify-between mt-2">
            <SheetTitle>E-Learning</SheetTitle>
            <DarkMode />
          </SheetHeader>
          <Separator className="mr-2" />
          <nav className="flex flex-col space-y-4">
            <span>My Learning</span>
            <span>Edit Profile</span>
            <span>Logout</span>
          </nav>
          {role === "instructor" && (
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Dashboard</Button>
              </SheetClose>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};
