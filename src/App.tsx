import { useState } from "react";
import "./App.css";
import cryImg from "./assets/cry.png";
import loveImg from "./assets/love.png";

function App() {
	const [noStyle, setNoStyle] = useState({});
	const [cryCount, setCryCount] = useState(0);
	const [yes, setYes] = useState(false);

	const moveNo = () => {
		const x = Math.random() * 200 - 100;
		const y = Math.random() * 120 - 60;
		setNoStyle({ transform: `translate(${x}px, ${y}px)` });
		setCryCount((c) => c + 1);
	};

	if (yes) {
		return (
			<div className="container">
				<h1>You said YES 💖</h1>
				<img src={loveImg} alt="love" className="image" />
				<p>I’m the happiest person alive 😍</p>
			</div>
		);
	}

	return (
		<div className="container">
			<h1>Grid 💕</h1>
			<h2>Will you be my Valentine?</h2>

			{cryCount > 0 && (
				<>
					<img src={cryImg} alt="crying" className="image" />
					<p>Why would you hurt me 😭 x{cryCount}</p>
				</>
			)}

			<div className="buttons">
				<button className="yes" onClick={() => setYes(true)}>
					Yes 💖
				</button>

				<button className="no" style={noStyle} onMouseEnter={moveNo}>
					No 😢
				</button>
			</div>
		</div>
	);
}

export default App;
