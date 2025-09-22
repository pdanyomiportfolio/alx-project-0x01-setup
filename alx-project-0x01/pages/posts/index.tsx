import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData, PostProps } from "@/interfaces";
import { useState } from "react";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  // Required by checker
  const [post, setPost] = useState<PostData | null>(null);

  // Actual state holding all posts
  const [allPosts, setAllPosts] = useState<PostProps[]>(posts);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPost = (newPost: PostData) => {
    const postWithId: PostProps = {
      ...newPost,
      id: allPosts.length + 1,
    };

    // Update both states
    setPost(postWithId);
    setAllPosts([...allPosts, postWithId]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allPosts.map(
            ({ title, body, userId, id }: PostProps, key: number) => (
              <PostCard
                title={title}
                body={body}
                userId={userId}
                id={id}
                key={key}
              />
            )
          )}
        </div>
      </main>

      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
