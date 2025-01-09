import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./Layout";
import { PublicRouter } from "./router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actions from "./store/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getHome());
  }, []);
  return (
    <Router>
      <Routes>
        {PublicRouter.map((route, index) => {
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
