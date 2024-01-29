import React from "react";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { BlogCard } from "./BlogCard";
import path from "path";

const POSTS_DIRECTORY = path.join(process.cwd(), "posts");

const Blog = async () => {
	const posts = await getAllPosts();

	return (
		<div>
			<h1 className="text-4xl font-bold text-center my-10">All Blog Posts</h1>
			<div className="space-y-4 my-10 container mx-auto">
				{posts.map((post) => (
					<BlogCard
						key={post.title}
						title={post.title}
						date={post.date}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</div>
	);
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

export default Blog;
