import {useRouter} from "next/router";

const BlogPostsPage = () => {
	const router = useRouter();

	console.log(router.query);	// 각 세그먼트의 문자열을 배열 반환

	return (
		<div>
			<h1>The Blog Posts</h1>
		</div>
	);
}

export default BlogPostsPage;