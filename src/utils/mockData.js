/**
 * Disclamer: This data has been taken from swiggy's api response and is only for learning purposes.
 *
 */
const resList = [
	{
		id: "242282",
		name: "McDonald's",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/8874a698-b2fe-4838-a02f-d4288ba3cdf0_242282.JPG",
		costForTwo: "₹400 for two",
		cuisines: ["American"],
		avgRating: 4.6,
		parentId: "630",
		deliveryTime: 19,
	},
	{
		id: "152971",
		name: "KFC",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/61a19651-713d-4f7d-849d-f4ba3a8d5e5f_152971.JPG",
		costForTwo: "₹400 for two",
		cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
		avgRating: 4.5,
		parentId: "547",
		deliveryTime: 11,
	},
	{
		id: "16865",
		name: "Pizza Hut",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ad775229-6f24-4858-8234-b974d501c013_16865.JPG",
		costForTwo: "₹350 for two",
		cuisines: ["Pizzas"],
		avgRating: 4.3,
		parentId: "721",
		deliveryTime: 29,
	},
	{
		id: "8614",
		name: "Burger King",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ee1fdf16-ea5f-4a44-9e58-7b3a9dee2618_8614.jpg",
		costForTwo: "₹350 for two",
		cuisines: ["Burgers", "American"],
		avgRating: 4.4,
		parentId: "166",
		deliveryTime: 17,
	},
	{
		id: "24207",
		name: "Domino's Pizza",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/14/32acf584-3293-4ac1-8348-82316a41346d_24207.JPG",
		costForTwo: "₹400 for two",
		cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
		avgRating: 4.3,
		parentId: "2456",
		deliveryTime: 25,
	},
	{
		id: "96094",
		name: "Wow! Momo",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/30/ea30420a-de57-4e41-aabe-c86398416d1f_96094.jpg",
		costForTwo: "₹300 for two",
		cuisines: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
		avgRating: 4.1,
		parentId: "1776",
		deliveryTime: 27,
	},
	{
		id: "659837",
		name: "Bakingo",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/666f50e7-670b-409b-9ccf-e8983056b43a_659837.jpg",
		costForTwo: "₹299 for two",
		cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
		avgRating: 4.6,
		parentId: "3818",
		deliveryTime: 38,
	},
	{
		id: "753312",
		name: "The Belgian Waffle Co.",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/1e5a8243-2117-4f01-85e8-7887a5770ef1_753312.jpg",
		costForTwo: "₹200 for two",
		cuisines: ["Waffle", "Desserts", "Ice Cream"],
		avgRating: 4.6,
		parentId: "2233",
		deliveryTime: 24,
	},
	{
		id: "19989",
		name: "Dunkin' - Donuts & Coffee",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2025/7/25/7168b116-64f6-4abc-983d-b7ae2d57bd8e_19989.jpg",
		costForTwo: "₹250 for two",
		cuisines: ["Desserts", "Cafe", "Bakery", "Beverages", "Fast Food"],
		avgRating: 4.5,
		parentId: "2276",
		deliveryTime: 23,
	},
	{
		id: "857152",
		name: "BOX8 - Desi Meals",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/ec489ddd-00f0-47f1-affa-71a53593e3d3_857152.jpg",
		costForTwo: "₹200 for two",
		cuisines: ["Biryani", "Thalis", "Home Food"],
		avgRating: 4.4,
		parentId: "10655",
		deliveryTime: 25,
	},
	{
		id: "443497",
		name: "EatFit",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/93d56042-f6d8-4496-8ef1-4d48b98756bf_443497.jpg",
		costForTwo: "₹270 for two",
		cuisines: [
			"Chinese",
			"Healthy Food",
			"Tandoor",
			"Pizzas",
			"North Indian",
			"Thalis",
			"Biryani",
		],
		avgRating: 4.3,
		parentId: "76139",
		deliveryTime: 29,
	},
	{
		id: "169835",
		name: "NIC Ice Creams",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/17936500-cfc0-4125-9f81-ce8737a02e24_169835.JPG",
		costForTwo: "₹120 for two",
		cuisines: ["Ice Cream", "Desserts"],
		avgRating: 4.6,
		veg: true,
		parentId: "6249",
	},
	{
		id: "8619",
		name: "Bikkgane Biryani",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/40cb7f19-6a78-424c-8d4b-0163bc4f42b8_8619.jpg",
		costForTwo: "₹400 for two",
		cuisines: ["Biryani", "Mughlai", "North Indian"],
		avgRating: 4.3,
		parentId: "5070",
		deliveryTime: 23,
	},
	{
		id: "143144",
		name: "Kwality Walls Ice Cream and More",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2024/6/19/d350082f-0ec3-4cf2-a660-9c359a7f9c6c_143144.jpg",
		costForTwo: "₹100 for two",
		cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
		avgRating: 4.7,
		veg: true,
		parentId: "582",
		deliveryTime: 35,
	},
	{
		id: "512981",
		name: "Mad Over Donuts",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2025/8/1/47da40ab-e132-4601-94ef-798bf1ffe854_512981.JPG",
		costForTwo: "₹600 for two",
		cuisines: ["Desserts"],
		avgRating: 4.4,
		veg: true,
		parentId: "611",
		deliveryTime: 47,
	},
	{
		id: "66837",
		name: "Cafe Delhi Heights",
		cloudinaryImageId: "bu5uf5s2lj22mzu6tkre",
		costForTwo: "₹800 for two",
		cuisines: ["Indian", "Chinese", "Italian"],
		avgRating: 4.4,
		parentId: "5408",
		deliveryTime: 32,
	},
	{
		id: "16418",
		name: "Subway",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/f165a434-143f-42bf-8943-2a5247363cf5_16418.jpg",
		costForTwo: "₹350 for two",
		cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
		avgRating: 4.3,
		parentId: "2",
		deliveryTime: 20,
	},
	{
		id: "40414",
		name: "Bikanervala",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/14d68c58-764f-40fe-8fb4-f93e6e71ea00_40414.jpg",
		costForTwo: "₹300 for two",
		cuisines: ["North Indian", "Snacks", "Chaat", "Sweets"],
		avgRating: 4.3,
		veg: true,
		parentId: "45936",
		deliveryTime: 29,
	},
	{
		id: "25823",
		name: "Faasos - Wraps, Rolls & Shawarma",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/a294c8fa-2ab6-4cf1-b2e9-5907821d807d_25823.JPG",
		costForTwo: "₹200 for two",
		cuisines: [
			"Kebabs",
			"Fast Food",
			"Snacks",
			"American",
			"Healthy Food",
			"Desserts",
			"Beverages",
		],
		avgRating: 4.3,
		parentId: "21809",
		deliveryTime: 34,
	},
	{
		id: "25397",
		name: "Oven Story Pizza",
		cloudinaryImageId:
			"RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/8e4e013f-7c31-4c7b-b3e4-4c734008b775_25397.jpg",
		costForTwo: "₹400 for two",
		cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
		avgRating: 4.2,
		parentId: "3534",
		deliveryTime: 22,
	},
];

export default resList;
