import React from "react";
import Nav from "./Nav";
import DisplayHog from "./HogTitle";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<DisplayHog hogs={hogs} />
		</div>
	);
}

export default App;
