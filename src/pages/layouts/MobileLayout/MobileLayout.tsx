import { FC } from "react";
import MobileRouter from "@components/Routers/MobileRouter";

// пока просто возвращается роутер, но в будущем может обрасти дополнительной логиков
const MobileLayout: FC = () => {
	return (
		<>
			<MobileRouter />
		</>
	);
};

export default MobileLayout;
