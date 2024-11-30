import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Course = () => {

  return (
    <Card classname="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="relative ">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6iNLdsaDq95fPQh0UGIlmAAAAA%26pid%3DApi&f=1&ipt=ac9841a22e54c8fd6e120d00b5e9192110bc1ef02ce863b9f2390856e3b5b531&ipo=images"
          alt="course"
          className="w-full h-36 object-cover rounded-t-lg"
        ></img>
        <CardContent className="px-5 py-4 space-y-3">
          <h1 className="hover:underline font-bold text-lg truncate">
            Nextjs Complete Course by Priyanka
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={"https://github.com/shadcn.png"}
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="font-medium text-sm">Priyanka</h1>
            </div>
            <Badge
              className={
                "bg-blue-600 text-white px-2 py-1 text-xs rounded-full"
              }
            >
              easy
            </Badge>
          </div>
          <div className="text-lg font-bold">
            <span>₹200</span>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default Course;
