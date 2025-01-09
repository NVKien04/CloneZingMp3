import { Home } from "../pages/Home";
import { Personal } from "../pages/Personal";
import { DefaultLayout } from "../Layout";
import { Layout1 } from "../Layout";
import { MyMusic } from "../pages/myMusic";
import { Radio } from "../pages/radio";
import Album from "../pages/Album";

const PublicRouter = [
  { path: "/", component: Home },
  { path: "/personal", component: Personal, layout: Layout1 },
  { path: "/my-music", component: MyMusic },
  { path: "/radio", component: Radio },
  { path: "/album/:title/:pid", component: Album },
];
const PrivateRouter = {};
export { PublicRouter, PrivateRouter };
