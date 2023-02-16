import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import About from "./containers/About/About";

function App() {
  return (
    <Layout>
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="/">Quiz</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
        </div>

        <Quiz />
        <About />

    </Layout>
  );
}

export default App;
