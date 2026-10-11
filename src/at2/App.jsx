import Presntation from "./Presntation.jsx";
import Matiers from "./matiers.jsx";
import Ville from "./ville.jsx";

function App() {
    return (
        <div className="container mt-4 text-center d-flex flex-column align-items-center">
            <Presntation />
            <hr className="w-100" />

            <Matiers />
            <hr className="w-100" />

            <Ville />
            <hr className="w-100" />
        </div>
    );
}

export default App;