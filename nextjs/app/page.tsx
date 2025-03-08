import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log("What am I doing here? -- SERVER OR CLIENT?");
  
  return (
    <>
    <h1>Welcome to NEXT.JS</h1>
    <Hello />
    </>
  );
}
