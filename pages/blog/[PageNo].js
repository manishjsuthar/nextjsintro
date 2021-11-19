import { useRouter } from "next/router";

const PageNo = () => {
  const router = useRouter();
  const PageNumber = router.query.PageNo;
  return (
    <div>
      <h1>this is {PageNumber} content</h1>
    </div>
  );
};

export default PageNo;
