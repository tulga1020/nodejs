import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";
import { Input, Button } from "@/components/Input";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function SignUp() {
  const [back, setBack] = useState(false);
  const isClicked = () => {
    setBack(!back);
  };
  return (
    <div className=" flex mx-auto w-3/12 h-[400px] bg-slate-400 flex-col gap-5 mt-8 justify-center items-center">
      <Input type="text" placeholder="username" classn="w-10/12 h-5 mt-8 p-3" />
      <Input type="text" placeholder="email" classn="w-10/12 h-5 p-3" />
      <Input type="password" placeholder="password" classn="w-10/12 h-5 p-3" />
      <Input
        type="password"
        placeholder="confirm password"
        classn="w-10/12 h-5 p-3"
      />
      <Button bclass="bg-white p-4" btext="Sign Up"></Button>
      <Link href="/">
        <Button
          bclass="bg-white p-4"
          btext="Back"
          isClicked={isClicked}
        ></Button>
      </Link>
    </div>
  );
}
