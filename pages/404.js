import { useRouter } from "next/router";
import { useEffect } from "react";

function Errorpage() {
  const router = useRouter();
  const handleInput = () => {
    router.push("/");
  };

  //automatically redirecting
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });

  return (
    <>
      <h1>Page not found</h1>
      <h2>
        Please redirect to homepage by clicking here ,{" "}
        <a onClick={handleInput}>Home</a>
      </h2>
    </>
  );
}

export default Errorpage;
