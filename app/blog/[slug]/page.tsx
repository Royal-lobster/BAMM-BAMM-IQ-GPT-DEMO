import React from "react";
import { POSTS_DIRECTORY } from "../page";
import path from "path";
import { readFile } from "fs/promises";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "@/app/blog/[slug]/markdown.css"

type PostPageProps = {
	params: {
		slug: string;
	};
};

const PostPage = async ({ params: { slug } }: PostPageProps) => {
	const post = await getPost(slug);
	return (
		<main className="container mx-auto my-10">
			<h1 className="text-4xl font-bold mb-2">{post.title}</h1>
			<div className="text-gray-500 text-sm mb-4">
				{post.date.toLocaleDateString("en-US", {
					day: "numeric",
					month: "long",
					year: "numeric",
				})}
			</div>
			<ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">{post.content}</ReactMarkdown>
		</main>
	);
};

const getPost = async (slug: string) => {
	const post = await readFile(path.join(POSTS_DIRECTORY, `${slug}.md`));
	const { data, content } = matter(post);
	return {
		title: data.title,
		date: data.date,
		content,
	};
};

export default PostPage;
