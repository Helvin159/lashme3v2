import { Route, Routes } from 'react-router-dom';
import Outlet from './routes/Outlet';
import Home from './routes/Home';

function App() {
	return (
		<Routes path='/' element={<Outlet />}>
			<Route index element={<Home />} />
		</Routes>
	);
}

export default App;
