import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useRegisterUserMutation,
  useLoginUserMutation,
} from "../features/api/authApi";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

//3VX0Q8Nazju7VlKk

const Login = () => {
  const [signupInput, setsignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const navigate = useNavigate();
     const handleChange = (e, type) => {
       let { name, value } = e.target;
       if (type === "signup") {
         setsignupInput({ ...signupInput, [name]: value });
       } else {
         setLoginInput({ ...loginInput, [name]: value });
       }
     };

     const handleSubmit = async (type) => {
       let inputData = type === "signup" ? signupInput : loginInput;
       const action = type === "signup" ? registerUser : loginUser;
       await action(inputData);
     };

     useEffect(() => {
       if (registerIsSuccess && registerData) {
         toast.success(registerData.message || "SignUp Successful");
       }
       if (registerError) {
         console.log("registerError", registerError);
         toast.error(registerError.data?.message || "SignUp Failed");
       }
     }, [registerIsSuccess, registerData, registerError]);
     useEffect(() => {
       if (loginIsSuccess && loginData) {
         toast.success(loginData.message || "Login Successful");
         navigate("/");
       }
       if (loginError) {
         console.log("loginError", loginError);
         toast.error(loginError.data?.message || "Login Failed");
       }
     }, [loginIsSuccess, loginData, loginError]);
  return (
    <div className="flex items-center justify-center mt-20">
      <Tabs defaultValue="signup" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup </TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Sign up by creating a new account and, when you're done, click
                on the submit button.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={signupInput.name}
                  placeholder="Eg Priyanka katre"
                  required="true"
                  onChange={(e) => handleChange(e, "signup")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={signupInput.email}
                  placeholder="Eg Priyankakatre@gmail.com"
                  required="true"
                  onChange={(e) => handleChange(e, "signup")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={signupInput.password}
                  placeholder="Eg zyx"
                  onChange={(e) => handleChange(e, "signup")}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleSubmit("signup")}
                disabled={registerIsLoading}
              >
                {registerIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait
                  </>
                ) : (
                  "Signup"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Log in to your account by entering your credentials and, when
                you're done, click on the login button..
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={loginInput.email}
                  placeholder="Eg Priyankakatre@gmail.com"
                  required="true"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={loginInput.password}
                  placeholder="Eg xyz"
                  onChange={handleChange}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleSubmit("login")}
                disabled={loginIsLoading}
              >
                {loginIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
