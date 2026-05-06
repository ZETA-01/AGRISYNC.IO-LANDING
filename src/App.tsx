/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardDemo from "./pages/DashboardDemo";
import RequestDemo from "./pages/RequestDemo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/system" element={<DashboardDemo />} />
        <Route path="/request-demo" element={<RequestDemo />} />
      </Routes>
    </BrowserRouter>
  );
}
