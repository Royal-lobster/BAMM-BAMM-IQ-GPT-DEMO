import Link from "next/link";
import React from "react";

type MorePostsCardProps = {
	title: string;
	date: Date;
	slug: string;
};

const MorePostsCard = ({ title, date, slug }: MorePostsCardProps) => {
	return (
		<div className="p-4">
			<Link href={`/blog/${slug}`} className="font-semibold">
				{title}
			</Link>
			<p className="text-gray-400 text-sm mt-2">
				{date.toLocaleDateString("en-US", {
					day: "numeric",
					month: "long",
					year: "numeric",
				})}
			</p>
		</div>
	);
};

export default MorePostsCard;
