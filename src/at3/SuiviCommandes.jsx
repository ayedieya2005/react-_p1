import Commande from './Commande';
 function SuiviCommandes(){
    return(
        <div className='container mt-4'>
        <h2 className="mb-4 text-secondary">suivi des Commandes</h2>
        {/*premiere commande avec couleur verte*/}
        <Commande
         id="101" 
        nom="Casque bluetooth"
        statut="Livree"
        couleurStatut="green"/>
         {/* deuxieme commande avec couleur orange*/}
        <Commande 
        id="102" 
        nom="clavier mecanique"
        statut="en cours d'expedition"
        couleurStatut="orange"/>
        {/* troisieme commande avec couleur rouge*/}
        <Commande 
        id="103" 
        nom="ecran 4k"
        statut="en attente de paiment"
        couleurStatut="red"/>

        </div>
    );
 }
 export default SuiviCommandes;