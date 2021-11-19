import Link from "next/link";
import Navbar from "./components/Navbar";
function Home() {
  return (
    <>
      <Navbar />
      {/* <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul> */}
    </>
  );
}

export default Home;
