import { useState } from "react";

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

const Login = () => {
    const [signupInput, setsignupInput] = useState({
        name: '',
        email: '',
        password:''
    })
    const [loginInput, setLoginInput] = useState({
        email: '',
        password:''
    })

    const handleChange = (e, type) => {
        let { name, value } = e.target;
        if (type === 'signup') {
            setsignupInput({ ...signupInput, [name]: value })
        } else {
            setLoginInput({ ...loginInput, [name]: value });
        }
    }

    const handleSubmit = (type) => {
        let submitData = type === 'signup' ? signupInput : loginInput
        console.log(submitData)
    }
    return (
        <div className="flex items-center justify-center">
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
                                Sign up by creating a new account and, when
                                you're done, click on the submit button.
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
                            <Button onClick={() => handleSubmit("signup")}>
                                Signup
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Log in to your account by entering your
                                credentials and, when you're done, click on the
                                login button..
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
                            <Button onClick={() => handleSubmit("login")}>
                                Login
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}


export default Login
