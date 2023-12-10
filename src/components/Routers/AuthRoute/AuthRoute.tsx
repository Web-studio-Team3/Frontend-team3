import { FC, PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { authTokenSelector } from "../../../Store/Auth/Auth.selectors";
import { useNavigate } from "react-router-dom";

const AuthRoute: FC<PropsWithChildren> = ({ children }) => {
	const token = useSelector(authTokenSelector);
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}
	}, [token]);

	return <>{children}</>;
};

export default AuthRoute;
