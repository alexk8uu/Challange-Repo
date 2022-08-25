import { configureStore } from "@reduxjs/toolkit";
import FormRedux from "./FormRedux";


export const store = configureStore({
    reducer: {
        form: FormRedux,
    }
})