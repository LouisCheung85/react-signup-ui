import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./components/registration-form/userRegestrationSlice";


const store = configureStore({
	reducer: {		
		registration: registrationReducer,
	},
});

export default store;
