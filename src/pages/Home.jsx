
import { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {                                            
	const { store, dispatch } = useGlobalReducer()
	useEffect(()=>{
		fetch('https://playground.4geeks.com/contact/agendas/Gus')
		.then((response)=>{
			if(response.ok===false){
				throw new Error("Falla al obtner los contactous")
			}
			return response.json()
		})
		.then((data)=>{
			let action={
				type:"set_contacts",
				payload: data.contacts
			}
			dispatch(action)
		})
		.catch((error)=>{console.log(error)})
	},[])
	return (
		<div className="text-center mt-5">
			<h1>AGENDA</h1>
			<div className="container d-flex flex-column align-items-center">
				{
					store.contacts.map((contacti, indice) => {
						return <ContactCard contactou={contacti} key={indice} />
					})
				}
			</div>
		</div>
	);
}; 