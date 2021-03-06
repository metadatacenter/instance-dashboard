import logocedar from "../assets/logocedar.svg";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<header className="header-container">
			<div className="flex-container">
				<div className="logo">
					<img height={130} src={logocedar} alt="logo" />
				</div>
				<nav className="navigation">
					<ul>
						<Link
							to={"/"}
							style={{ textDecoration: "none" }}>
							<li>HOME</li>
						</Link>{" "}
						<Link
							to={"/dashboard"}
							style={{ textDecoration: "none" }}>
							<li>DASHBOARD</li>
						</Link>{" "}
						<li style={{ visibility: "hidden" }}>LINK</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
