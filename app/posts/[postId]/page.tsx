import CardList from "@/app/components/posts/cardList";
import BackButton from "@/app/components/posts/backButton";

interface PostDetailProps {
  params: {
    postId: string;
  };
}
interface IComment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const PostDetail = async ({ params }: PostDetailProps) => {
  const { postId } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (!response.ok) {
    return <h1>Post Not Found</h1>;
  }
  const post = await response.json();

  const responseComment = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  const comments: IComment[] = await responseComment.json();
  return (
    <div className="grid grid-rows justify-items-center p-8 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <CardList>
        <div className="card-body">
          <div className="card-actions justify-start">
            <BackButton href="/posts" />
          </div>

          <h2 className="card-title">{post.title}</h2>
          <p>{post.body}</p>
          <hr />
          <h2 className="sub-title">Comment</h2>
          {comments.map((comment) => {
            // Ambil huruf pertama dari nama
            const getFirstLetter = (name: string) =>
              name.charAt(0).toUpperCase();

            return (
              <ul key={comment.id}>
                <li>
                  <div className="flex flex-row items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary text-lg text-white flex items-center justify-center">
                      {getFirstLetter(comment.name)}
                    </div>
                    <div className="text-base font-medium text-slate-600">
                      {comment.name}
                    </div>
                  </div>
                  <div className="ms-8">{comment.body}</div>
                </li>
              </ul>
            );
          })}
        </div>
      </CardList>
    </div>
  );
};

export default PostDetail;
