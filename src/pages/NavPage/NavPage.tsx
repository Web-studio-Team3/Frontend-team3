import { Link } from "react-router-dom";

const NavPage = () => {
	return (
		<>
			<Link to={"/account/me/"}> Профиль </Link>
			<Link to={"/market"}> Магазин </Link>
			<Link to={"/err"}> Ошибка </Link>
		</>
	);
};

export default NavPage;
