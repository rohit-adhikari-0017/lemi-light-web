import React from "react";
import { useRouter } from "next/router";

const Post = () => {
  let router = useRouter();
  console.log(router);
  return <div>This is Titile one</div>;
};

export default Post;
