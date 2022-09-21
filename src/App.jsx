import React from 'react';
import ProductListPage from './ProductListPage';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import NavBar from './NavBar';


function App() {
	const path = window.location.pathname;
	return (
		<>
			{/* <NavBar productCount={totalCount} /> */}
		<div>
			<div className="bg-black">
				<header className='text-4xl text-white pl-20 py-4 font-extrabold '>
					Amazon
</header>
			</div>
				
			<Routes>
				<Route index  element={<ProductListPage />}></Route>
				<Route path="/products/:sku/" element={<ProductDetail />}></Route>
				{/* <Route>{NoMatching}</Route> */}
			</Routes>
		</div>
		<footer className='bg-black py-5 px-20 text-white flex justify-between '>
		<div>
			Copyrighit@2022
		</div>
		<div>
			DESIGN By SAHIL KHAN
		</div>

	</footer>
		</>
	)







// 	const [query, setQuery] = useState('');
// 	const [sort, setSort] = useState('default');
	
		
	
// 	const allData = [
// 		{
// 			tittle:"Black Coffee Mugs",
// 			photo:"https://5.imimg.com/data5/SELLER/Default/2020/10/YO/UT/JO/27080277/black-coffee-mug-mockup-500x500.jpg" ,
// 			category: "Mugs",
// 			amount:20,
// 		},
// 		{
// 			tittle: "Brown Shirt",
// 			photo:"https://images.meesho.com/images/products/42958844/pejif_400.jpg" ,
// 			category:"T-shirts",
// 			amount:30,
// 		},
// 		{
// 			tittle: "Fathers day Coffee Mug",
// 			photo:"https://imgcdn.floweraura.com/daddy-love-coffee-mug-9890857gf-A.jpg" ,
// 			category: "Mugs",
// 			amount:2,
// 		},
//     {
// 			tittle:"Black t-shirt",
// 			photo:"https://cdn.shopify.com/s/files/1/0155/8131/products/MG_6804_75aab9d7-88e2-49f4-8ed4-1e9fd589bcc7_2000x.jpg?v=1652102703" ,
// 			category: "T-shirts" ,
// 			amount:50,
// 		},
//     {
// 			tittle: "iPhone pro max" ,
// 			photo:"https://9to5mac.com/wp-content/uploads/sites/6/2022/07/iphone-14-camera.jpg?quality=82&strip=all&w=1000" ,
// 			category:"iphones",
// 			amount:1000,
// 		},
//     {
// 			tittle:"iPhone 14" ,
// 			photo:"https://i.ytimg.com/vi/CnqKgxmWhzc/maxresdefault.jpg" ,
// 			category:"iphones",
// 			amount:500,
// 		}
// 	];

// 	const data = allData.filter(function(item) {
// 		const lowerCaseTittle = item.tittle.toLowerCase();
// 		const lowerCaseQuery = query.toLowerCase();
// 		return lowerCaseTittle.indexOf(lowerCaseQuery) != -1;
// 	});
  
//   if (sort == "prize") {
//     data.sort(function (x,y) {
//       return (x.amount - y.amount);
//     });
//   } else if (sort == "name") {
//     data.sort(function (x,y) {
//       return (x.tittle < y.tittle) ? -1 : 1;
//     });
//   } 

  
// 	function handleQueryChange(event) {
// 		setQuery(event.target.value);
// 	}

// 	function handleSortChange(event) {
// 		setSort(event.target.value);
// 	}

// 	return (
// 		<div>
// 			<input
// 				value={query}
// 				placeholder="search"
// 				className="border m-3 bg-blue-600 border-gray-500"
// 				palceholder="search"
// 				onChange={handleQueryChange}
// 			/>

// 			<select
// 				className=' border-2'
//         onChange={handleSortChange} 
//         value={sort} >
// 				<option value="default">default sort</option>
// 				<option value="prize">sort by prize</option>
// 				<option value="name">sort by tittle</option>
// 			</select>
            
// 			<ProductList products={data} />
// 		</div>
		
// 	);
}

export default App;
