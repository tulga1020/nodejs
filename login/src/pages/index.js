import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Input, Button } from "@/components/Input";
import { useEffect, useState } from "react";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword]=useState("")
  const [signup, setSignup] = useState(false);
  const isClicked = () => {
    setSignup(!signup);
  };
const loginHandler = async ()=>{
  try{
    const result = await axios.post("http://localhost:5000/login", {
      email: email, 
      password:password
    })
  }
}
  return (
    <div className=" flex mx-auto w-3/12 h-[400px] bg-slate-400 flex-col gap-5 mt-8 justify-center items-center rounded-xl">
      <Input type="text" placeholder="email" classn="w-10/12 h-5 p-3 rounded" />
      <Input
        type="password"
        placeholder="password"
        classn="w-10/12 h-5 p-3 rounded"
      />
      <Button bclass="bg-white p-4 rounded " btext="LOGIN"></Button>
      <Link href="/signup">
        <Button
          bclass="bg-white p-4 rounded w-full"
          btext="Sign Up"
          isClicked={isClicked}
        ></Button>
      </Link>
    </div>
  );
}
