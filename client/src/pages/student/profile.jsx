import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Loader } from "lucide-react";
import Courses from "./courses";
import Course from "./course";

const ProfileSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 my-24 animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto md:mx-0"></div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-3">
        <div className="flex flex-col items-center">
          <div className="h-24 w-24 md:h-32 md:w-32 mb-4 bg-gray-300 rounded-full"></div>
        </div>
        <div className="w-full">
          <div className="mb-2 h-6 bg-gray-300 rounded w-1/2"></div>
          <div className="mb-2 h-6 bg-gray-300 rounded w-1/2"></div>
          <div className="mb-2 h-6 bg-gray-300 rounded w-1/2"></div>
          <div className="mt-2 h-10 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
      <div className="mt-8">
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-40 bg-gray-300 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  const isLoading = true;
  const enrolledCourses = [1, 2];
  return (
    <div className="max-w-5xl mx-auto px-4 my-24">
      <h1 className="font-bold text-2xl text-center md:text-left">Profile</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-3">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-4">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100">
              Name :
              <span className="font-normal text-gray-700 dark:text-gray-300">
                Priyanka Mearstack
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100">
              Email :
              <span className="font-normal text-gray-700 dark:text-gray-300">
                Priyanka@gmail.com
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100">
              Role :
              <span className="font-normal text-gray-700 dark:text-gray-300">
                Instructor
              </span>
            </h1>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="mt-2">
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save once you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    placeholder="Name"
                    className="col-span-3"
                  />
                  <Label>Profile Photo</Label>
                  <Input type="file" accept="image/*" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader className="mr-2 h-4 w-4 animate-spin" /> Please
                      Wait
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="">
        <h1 className="font-medium text-lg">Courses you are enrolled in</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
          {enrolledCourses.length === 0 ? (
            <h1>You haven't enrolled yet</h1>
          ) : (
            enrolledCourses.map((_, index) => (
              <div key={index}>
                <Course />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
