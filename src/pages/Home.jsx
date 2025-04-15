
import ContactCard from "../components/ContactCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const contactList = [
	{
		name: "Luis Gomez",
		address: "Bermudas 316",
		phone: "551368987",
		email: "docgus@miemail.com",
	},
	{
		name: "Maria Lopez",
		address: "Malvinas 518",
		phone: "5512345678",
		email: "gohome@miemail.com",
	},
	{
		name: "Juan Perez",
		address: "Calle Falsa 123",
		phone: "5512345678",
		email: "getback@miemail.com",
	}
];

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>AGENDA</h1>
			<div className="container d-flex flex-column align-items-center">
				{
					contactList.map((contacti,indice)=>{
						 return <ContactCard contactou={contacti} key={indice} />
					})
				}
			</div>
		</div>
	);
}; 