"use client";

interface Post {
  userId: number;
  id: number;
}

interface viewButtonProps {
  post: Post;
}
const ViewButton: React.FC<viewButtonProps> = ({ post }) => {
  const handleClick = () => {
    alert(`
        UserId: ${post.userId} \n
        postId: ${post.id}
        `);
  };
  return (
    <>
      <button onClick={handleClick} className="btn btn-secondary">
        button
      </button>
    </>
  );
};

export default ViewButton;
