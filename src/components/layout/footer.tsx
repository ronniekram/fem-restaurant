import React from "react";
import "twin.macro";
import tw, { styled, css } from "twin.macro";
import logo from "../../assets/logo.svg";

const FooterContainer = styled.footer`
	${tw`bg-grey-900 text-white! uppercase`};
	${tw`text-xs leading-3 tracking-8`};
	${tw`flex flex-col flex-shrink-0 md:(flex-row)`};
	${tw`xl:(items-center content-center)`};
	${tw`antialiased font-spartan`};
	height: 27.5rem;
	@media (min-width: 768px) {
		height: 20.5rem;
	}
	@media (min-width: 1280px) {
		height: 15rem;
	}
`;

const Footer = () => {
	return (
		<FooterContainer>
			{/* LOGO  */}
			<div>
				<img src={logo} alt="" />
			</div>
			{/* ADDRESS/HOURS  */}
			<div tw="flex flex-col xl:(flex-row)">
				{/* ADDRESS  */}
				<div>
					<p>Marthwaite, Sedbergh</p>
					<p>Cumbria</p>
					<p>+00 44 123 4567</p>
				</div>
				{/* HOURS  */}
				<div>
					<p>Open Times</p>
					<p>Mon - Fri: 09:00 AM - 10:00 PM</p>
					<p>Sat - Sun: 09:00 AM - 11:30 PM</p>
				</div>
			</div>
		</FooterContainer>
	);
};

export default Footer;
