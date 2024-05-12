import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/Store/store";
import { Actions } from "./../../Store/actions";

interface iCheckUserContainerProps {
	children: JSX.Element;
}

const CheckAuth = (props: iCheckUserContainerProps) => {
	const { children } = props;

	const dispatch = useDispatch();
	const getUserState = useSelector(
		(state: RootState) => state.Auth.getUserState
	);

	useEffect(() => {
		const jwt_token = sessionStorage.getItem("jwt_token");
		const user_id = sessionStorage.getItem("user_id");
		if (jwt_token !== null && user_id !== null) {
			dispatch(
				Actions.Auth.getUser({
					jwt_token,
					user_id,
				})
			);
		}
	});

	if (getUserState === "loading") {
		return (
			<Layout
				style={{
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					background: "var(--background)",
				}}
			>
				Загрузка
			</Layout>
		);
	}

	return <>{children}</>;
};

export default CheckAuth;
