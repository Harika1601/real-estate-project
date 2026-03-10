import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignupPage from "./Components/SignupPage";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";

import Buyers from "./Components/BuyersPage";
import Tenants from "./Components/TenantsPage";
import Owners from "./Components/OwnersPage";
import About from "./Components/AboutPage";
import Contact from "./Components/ContactPage";

import PaymentPage from "./Components/PaymentPage";
import PaymentOptionsPage from "./Components/PaymentOptionsPage";

function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<SignupPage />} />
<Route path="/signup" element={<SignupPage />} />
<Route path="/login" element={<LoginPage />} />

<Route path="/home" element={<HomePage />} />

<Route path="/payment" element={<PaymentPage />} />
<Route path="/payment-options" element={<PaymentOptionsPage />} />

<Route path="/buyers" element={<Buyers />} />
<Route path="/tenants" element={<Tenants />} />
<Route path="/owners" element={<Owners />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />

</Routes>

</BrowserRouter>

);

}

export default App;