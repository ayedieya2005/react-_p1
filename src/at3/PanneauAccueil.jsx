function PanneauAccueil() {
const nombreCommandes = 3;
 return (
    <div className="container mt-4 p-4 bg-light border rounded shadow-sm ">
        <h1 className="text-primary mb-2">Mon espace client</h1>
        <p className="lead mb-0">
            vous avez actuellement<strong>{nombreCommandes}commande en cours</strong>
        </p>
    </div>
 );
}
export default PanneauAccueil;