import Link from "next/link";

const PostItem = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <h3 className="text-2xl">
        {post.id}--{post.title}
      </h3>
    </Link>
  );
};

export default PostItem;
