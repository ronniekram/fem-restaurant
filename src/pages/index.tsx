import "twin.macro";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Home = (): JSX.Element => {
	return (
		<Layout>
			<SEO />
			<div tw="text-2xl m-10 w-full h-screen">
				Hello world!
			</div>
		</Layout>
	);
};
export default Home;
