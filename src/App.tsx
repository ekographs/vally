import { useEffect, useState } from "react";
import "./App.css";
import cryImg from "./assets/cry.png";
import loveImg from "./assets/love.png";

type Heart = {
	id: number;
	left: number;
	size: number;
	duration: number;
};

const cries = [
	"Why would you do this 😭",
	"My heart can’t take this 💔",
	"I’m begging you 😢",
	"Grid pleaseeee 😭💔",
];

function App() {
	const [noStyle, setNoStyle] = useState({});
	const [cryCount, setCryCount] = useState(0);
	const [yes, setYes] = useState(false);
	const [hearts, setHearts] = useState<Heart[]>([]);

	// Falling hearts generator
	useEffect(() => {
		const interval = setInterval(() => {
			setHearts((h) => [
				...h.slice(-30),
				{
					id: Math.random(),
					left: Math.random() * 100,
					size: Math.random() * 20 + 15,
					duration: Math.random() * 3 + 3,
				},
			]);
		}, 400);

		return () => clearInterval(interval);
	}, []);

	const moveNo = () => {
		const x = Math.random() * 220 - 110;
		const y = Math.random() * 140 - 70;
		setNoStyle({
			transform: `translate(${x}px, ${y}px) rotate(${Math.random() * 20 - 10}deg)`,
		});
		setCryCount((c) => Math.min(c + 1, cries.length));
	};

	return (
		<>
			{/* Falling hearts */}
			<div className="heart-container">
				{hearts.map((heart) => (
					<span
						key={heart.id}
						className="falling-heart"
						style={{
							left: `${heart.left}%`,
							fontSize: `${heart.size}px`,
							animationDuration: `${heart.duration}s`,
						}}
					>
						💖
					</span>
				))}
			</div>

			{yes ? (
				<div className="container yes-screen">
					<h1>You said YES 💖</h1>
					<img src={loveImg} alt="love" className="image pop" />
					<p className="final-message">
						Grid, from the moment you came into my life, everything felt
						lighter. Thank you for choosing me — I promise to keep choosing you
						every day 💕
					</p>
					<div className="hearts">💘 💕 💖 💞 💘</div>
				</div>
			) : (
				<div className="container">
					<h1>Grid 💕</h1>
					<h2>Will you be my Valentine?</h2>

					{cryCount > 0 && (
						<div className="cry-box">
							<img src={cryImg} alt="crying" className="image shake" />
							<p>{cries[cryCount - 1]}</p>
						</div>
					)}

					<div className="buttons">
						<button className="yes" onClick={() => setYes(true)}>
							Yes 💖
						</button>

						<button
							className="no shake"
							style={noStyle}
							onMouseEnter={moveNo}
							onTouchStart={moveNo}
						>
							No 😢
						</button>
					</div>
				</div>
			)}
		</>
	);
}

export default App;
