import * as React from "react";
import tw, { GlobalStyles, css } from "twin.macro";
import Footer from "./layout/footer";
import "../assets/fonts/fonts.css";

const Layout = ({
	children,
	...rest
}: {
	children: React.ReactNode;
}): JSX.Element => (
	<>
		<div
			{...rest}
			tw="antialiased font-spartan"
			// css={[`flex: 1 0 auto;`]}
		>
			<GlobalStyles />
			{children}
			<Footer />
		</div>
	</>
);

export default Layout;
