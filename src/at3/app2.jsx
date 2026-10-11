import PanneauAccueil from "./PanneauAccueil.jsx";
import SuiviCommandes from "./SuiviCommandes.jsx";
import CommandeVirtuel from "./CommandeVertuel.jsx";

function App2() {
    return (
        <div className="container mt-4 text-center d-flex flex-column align-items-center">
            <div className="w-100" style={{ maxWidth: "800px" }}>
                <PanneauAccueil />
                <SuiviCommandes />
                <CommandeVirtuel numero="CMD-1042" />
                <CommandeVirtuel numero="CMD-1043" />
                <CommandeVirtuel numero="CMD-1044" />
            </div>
        </div>
    );
}

export default App2;