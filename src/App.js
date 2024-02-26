import { Route, Routes } from 'react-router-dom';
import Outlet from './routes/Outlet';
import Home from './routes/Home';

// Tailwind
import './css/output.css';

// Sass
import './css/style.css';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Outlet />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
