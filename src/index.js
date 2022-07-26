import {  StrictMode} from "react";
import {createRoot} from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import "./Style/index.css"

import App from "./App";
const rootElement = document.getElementById('root');
const newRoot = createRoot(rootElement);


newRoot.render(
   <StrictMode>
<BrowserRouter>

<App/>
</BrowserRouter>

   </StrictMode>
)


