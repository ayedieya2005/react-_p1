import { useEffect, useState } from "react";

function CommandeVirtuel({ numero }) {
    const [avancement, setAvancement] = useState(0);
    const [estLivree, setEstLivree] = useState(false);

    const situation =
        avancement === 0 ? "📦 Commande reçue" :
        avancement < 2 ? "⚙️ En préparation" :
        avancement < 3 ? "🚚 Expédiée" :
                         "✅ Livrée";

    useEffect(() => {
        if (avancement >= 3) {
            setEstLivree(true);
        } else {
            setEstLivree(false);
        }
    }, [avancement]);

    function avancer() {
        setAvancement(avancement + 1);
    }

    return (
        <div className="container mt-4 p-4 bg-light border rounded shadow-sm text-center">
            <h3>{numero}</h3>
            <p>{situation}</p>
            <p>Étapes validées : {avancement}</p>
            {estLivree && (
                <p className="text-success font-weight-bold">
                    Statut : Commande bien livrée à destination !
                </p>
            )}
            <div className="d-flex justify-content-center gap-2 mt-3">
                <button 
                    className="btn btn-primary" 
                    onClick={avancer} 
                    disabled={avancement >= 3}
                >
                    Faire avancer
                </button>
                <button 
                    className="btn btn-danger" 
                    onClick={() => setAvancement(0)}
                >
                    Annuler la commande
                </button>
            </div>
        </div>
    );
}

export default CommandeVirtuel;