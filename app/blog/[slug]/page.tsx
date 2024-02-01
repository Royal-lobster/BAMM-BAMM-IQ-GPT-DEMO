import React from "react";
import path from "path";
import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MorePosts from "./MorePosts";

const POSTS_DIRECTORY = path.join(process.cwd(), "posts");

type PostPageProps = {
	params: {
		slug: string;
	};
};

const PostPage = async ({ params: { slug } }: PostPageProps) => {
	const post = await getPost(slug);
	const posts = await getAllPosts();
	const filteredPosts = posts.filter((p) => p.slug !== slug);

	return (
		<main className="container mx-auto my-10 flex flex-col lg:flex-row gap-10 justify-between">
			<article>
				<h1 className="text-4xl font-bold mb-2">{post.title}</h1>
				<div className="text-gray-500 text-sm mb-4">
					{post.date.toLocaleDateString("en-US", {
						day: "numeric",
						month: "long",
						year: "numeric",
					})}
				</div>
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					className="prose prose-invert max-w-none prose-gray"
				>
					{post.content}
				</ReactMarkdown>
			</article>
			<aside>
				<MorePosts filteredPosts={filteredPosts} />
			</aside>
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

const getAllPosts = async () => {
	const allBlogFiles = await readdir(POSTS_DIRECTORY, { recursive: false });

	const posts = await Promise.all(
		allBlogFiles.map(async (file) => {
			const post = await readFile(path.join(POSTS_DIRECTORY, file));
			const { data, content } = matter(post);
			return {
				title: data.title,
				date: data.date,
				slug: data.slug,
				excerpt: `${content.slice(0, 140)}...`,
			};
		}),
	);

	return posts;
};

export default PostPage;
