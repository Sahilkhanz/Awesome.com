import React,{ useEffect, useState } from "react";
import ProductList from './ProductList';
import allData from './DummyData';
import NoMatching from './NoMatching';
import { getProductList } from './api';
import Loading from "./Loading";

 function ProductListPage() {
	 const [productList, setProductList] = useState([]);
	 const [loading, setLoading] = useState(true);

	const [query, setQuery] = useState('');
	const [sort, setSort] = useState('default');

	useEffect( function ( ) {
		const xyz = getProductList();
		const abc = xyz.then(function (products) {
			console.log("response",products);  
			setProductList(products);
			setLoading(false);
			return products;
		});
		abc.then(function (data) {
			console.log("promise", data);
		});
}, [ ] );
			
	// useEffect(function () {
	// 	const list = getProductList(query);
	// 	setProductList(list);
	// },
	// 	[query]
	// );
	let data = productList.filter(function (item) {
		const lowerCaseTitle = item.title.toLowerCase();
		const lowerCaseQuery = query.toLowerCase();
		return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
	});
	
	if (sort == "low to high prize") {
		data.sort(function (x, y) {
			return (x.price - y.price);
		});
	} else if (sort == "name") {
		data.sort(function (x, y) {
			return (x.title < y.title) ? -1 : 1;
		});
	} else if (sort == "high to low prize") {
		data.sort(function (x, y) {
			return (y.price - x.price);
		});
	}

  
	function handleQueryChange(event) {
		setQuery(event.target.value);
	}

	function handleSortChange(event) {
		setSort(event.target.value);
	}

	 
    if (loading) {
		return <Loading />;
	}
	
	return (
		<div className=" justify-between px-20">
			<div className="bg-black m-10 rounded-md min-w-fit">
				<div className=" text-right py-5 mx-20">
				<input
				value={query}
				placeholder="search"
				className=" rounded-md bg-gray-200 mx-1 my-1 sm:text-center  text-black w-52 px-5 border-gray-500"
				palceholder="search"
				onChange={handleQueryChange}
			/>

			<select
				className=' border-2 rounded-md mx-1  my-1 font-semibold w-52 px-5'
        onChange={handleSortChange} 
        value={sort} >
						<option value="default">default sort</option>
						<option value="name">sort by title</option>
						<option value="low to high prize">sort by prize: low to high </option>
						<option value="high to low prize">sort by prize: high to low</option>
			</select>
				</div>
			
            
				{/* <ProductList products={data} /> */}
				{data.length > 0 && <ProductList products={data} />}

				<div className="flex  text-white pl-32 gap-1 py-5">
				<button className="border hover:bg-indigo-900 border-white p-2">1</button>
				<button className="border hover:bg-indigo-900 border-white p-2">2</button>
					<button  className="border hover:bg-indigo-900 border-white p-2">3</button>
					<button  className='pl-2 hover:text-yellow-300 text-xl'> --> </button>
			</div>
			</div>
			{data.length == 0 && <NoMatching />}

		</div>
		
	);
}
    
export default ProductListPage;