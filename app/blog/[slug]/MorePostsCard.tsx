import Link from "next/link";
import React from "react";

type MorePostsCardProps = {
	title: string;
	date: Date;
	slug: string;
};

const MorePostsCard = ({ title, date, slug }: MorePostsCardProps) => {
	return (
		<div>
			<Link href={`/blog/${slug}`} className="text-lg font-bold my-2">
				{title}
			</Link>
			<p className="text-gray-400 text-sm">
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
