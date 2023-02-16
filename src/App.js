import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import About from "./containers/About/About";
import {Routes, Route, Link} from "react-router-dom";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Layout>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Quiz</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/router">Rendering from Route</Link>
                    </li>
                </ul>
            </nav>
        </div>

        <Routes>
            <Route path={'/'} element={<Quiz />} />
            <Route path={'/about'} element={<About />} />
            <Route path={'*'} element={<NotFoundPage />} />
        </Routes>


    </Layout>
  );
}

export default App;
