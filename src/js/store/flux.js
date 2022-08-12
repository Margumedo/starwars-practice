const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			planets: [],
			favorites: [],    //creo una lista de favoritos donde quiero guardar lo que adjunte
			endPoint: ["character", "planets"],
		},
		actions: {
			//Declaro mi funcion getCharacter  que guarda los characteres// 

			getCharacter: async () => {			//lo declaro como un objeto porque aqui solo van objetos
				let store = getStore();
				try {
					let response = await fetch('https://swapi.dev/api/people/')
					let data = await response.json();

					if (response.ok) {
						setStore({
							...store,
							character: data.results
						})   //hago una copia de store y modifico character
					}
				} catch (error) {

				}

			},
			//Declaro mi funcion que solo trae planetas//
			getPlanet: async () => {			//lo declaro como un objeto porque aqui solo van objetos
				let store = getStore();
				try {
					let response = await fetch('https://swapi.dev/api/planets/')
					let data = await response.json();

					if (response.ok) {
						setStore({
							...store,
							planets: data.results
						})   //hago una copia de store y modifico character
					}
				} catch (error) {

				}
			},

			//Declaro mi funcion para agregar favoritos//
			addFavorites: (id) => {   //id es igual a item.created
				console.log("me ejecuto");

				let store = getStore();  //declaro una variable store para guardar getStore y sea mas facil de manejar
				let existe = store.favorites.find((item) => item.created == id)
				if (!existe) {
					for (const endPoint of store.endPoint) {
						for (const item of store[endPoint]) {
							if (item.created == id) {
								setStore({
									...store,
									favorites: [...store.favorites, item]
								})
								break;
							}
						}
					}
				} else {
					let newArray = store.favorites.filter((item) => item.created != id)
					setStore({
						...store,
						favorites: newArray
					})
				}
			},

			//Declaro mi funcion para eliminar favoritos//

			deleteFavorites: (id) => {
				console.log(id);
				let store = getStore();  //
				let newArray = store.favorites.filter((item) => item.created !== id)
				console.log(newArray);
				setStore({
					...store,
					favorites: newArray
				})
			}
		}
	};
};

export default getState;
