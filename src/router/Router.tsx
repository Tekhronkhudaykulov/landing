import { HashRouter, Routes, Route } from "react-router-dom";
import { _routes } from "./_routes";

import LandingPage from "../views/LandingPage/view";

const Router = () => {
  return (
    <HashRouter>
      {/* <Layout>
        <Routes>
          <Route path="/" element={<Referen />}>
            <Route path="one" element={<ReferencePageMain />} />
            <Route path="two" element={<ReferencePageChild />} />
            <Route path="three" element={<ReferenceType />} />
            <Route path="four" element={<ReferencePageYears />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="buyurtmalar" element={<Buyurtma />} />
          </Route>
        </Routes>
      </Layout> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
