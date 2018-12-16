import Home from "./home/home.vue";

export default vue => [
	{
		path: "",
		controller: async () => {
			vue.currentView = Home;
		}
	}
];