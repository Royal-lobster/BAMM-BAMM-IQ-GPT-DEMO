import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type BlogCardProps = {
	title: string;
	excerpt: string;
	date: Date;
	slug: string;
};

export const BlogCard = ({ title, excerpt, date, slug }: BlogCardProps) => {
	return (
		<div className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
			<h3 className="text-xl font-bold mb-2">{title}</h3>
			<p className="text-gray-600 mb-4">{excerpt}</p>
			<div className="text-gray-500 text-sm mb-4">
				{date.toLocaleDateString("en-US", {
					day: "numeric",
					month: "long",
					year: "numeric",
				})}
			</div>
			<Link
				href={`/blog/${slug}`}
				className={buttonVariants({ variant: "secondary" })}
			>
				Read more
			</Link>
		</div>
	);
};
