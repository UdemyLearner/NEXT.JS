// import Image from "next/image";
import Hello from "../components/hello";

export const metadata = {
  title : "Home | Next.js",
  description : "Home Page"
}; 

export default function Home() {
  console.log("What am I doing here? -- SERVER OR CLIENT?");
  
  return (
    <>
    <h1 className="text-3xl">Welcome to NEXT.JS</h1>
    <Hello />
    </>
  );
}
