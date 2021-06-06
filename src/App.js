import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
    return (
        <div>
            <h1>My todos</h1>
            <Todo text="Learn React" />
            <Todo text="Master React" />
            <Todo text="Explore the full react" />
            <Modal />
            <Backdrop />
        </div>
    );
}

export default App;
