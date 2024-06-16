import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Notfound from "../src/app/component/notfound/Notfound";
import { publicRouter } from "./app/route/route";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRouter.map((item, index) => {
            const Page = item.element;
            return item.layout ? (
              <Route
                key={index + "routerpriva"}
                path={item.path}
                element={
                  <item.layout type={item?.type}>
                    <Page />
                  </item.layout>
                }
              />
            ) : (
              <Route
                key={item?.path + index}
                path={item?.path}
                element={<Page />}
              />
            );
          })}
          <Route path="*" element={<Notfound />} />
        </Routes>
        <ToastContainer autoClose={1500} style={{ fontSize: "15px" }} />
      </div>
    </Router>
  );
}

export default App;
