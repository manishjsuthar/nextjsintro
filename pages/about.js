import Navbar from "./components/Navbar";
import Image from "next/image";
const about = () => {
  return (
    <div>
      <Navbar />
      <h1>About page</h1>
      <Image
        src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80"
        height="500"
        width="300"
        alt="image"
      ></Image>
    </div>
  );
};

export default about;
