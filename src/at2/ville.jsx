function Ville() {
const pays=[
{nom:"Tunisie",ville:"Sfax",photos:"/sfax.webp"},
{nom:"France",ville:"Marseille",photos:"/france.avif"},
{nom:"Allemagne",ville:"Bern",photos:"/all.jpg"},
{nom:"Maroc",ville:"Aghadir",photos:"/maroc.webp"},
];
return (
<>
<h3>Villes préférées</h3>
<table className='table table-dark'>
<thead>
<tr>
<th>Nom</th>
<th>Ville</th>
<th>Image</th>
</tr>
</thead>
<tbody>
{
pays.map((value,ind)=>{
return(
<tr key={ind}>
<td>{value.nom}</td>
<td>{value.ville}</td>
<td><img src={value.photos} width="100" alt={value.ville} /></td>
</tr>
)
})
}
</tbody>
</table>
</>
);
}
export default Ville;