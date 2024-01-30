import React from "react";
import MorePostsCard from "./MorePostsCard";

type MorePostsProps = {
	filteredPosts: {
		title: string;
		date: Date;
		slug: string;
		excerpt: string;
	}[];
};

export const MorePosts = ({ filteredPosts }: MorePostsProps) => {
	return (
		<>
			<h2 className="text-2xl font-bold mb-2">More Posts</h2>
			<div className="max-w-[400px] lg:w-[400px] rounded bg-gray-900 divide-y">
				{filteredPosts.map((post) => (
					<MorePostsCard
						key={post.slug}
						title={post.title}
						date={post.date}
						slug={post.slug}
					/>
				))}
			</div>
		</>
	);
};

export default MorePosts;
