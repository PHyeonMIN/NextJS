import {useRouter} from "next/router";

function PortfolioProjectPage() {
	const router = useRouter();

	console.log(router.pathname);	// 경로이름
	console.log(router.query);		// 쿼리스트링에 엑세스

	return (
		<div>
			<h1>The Portfolio Project Page</h1>
		</div>
	);
}

export default PortfolioProjectPage;