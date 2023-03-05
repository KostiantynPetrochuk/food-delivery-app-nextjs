import BreadCrumbs from "./components/BreadCrumbs";
import { HomeEvents, HomeInfo, HomeNovelty, HomeDishes } from "./partials/Home";

import "./normalize.css";
import "./page.scss";

export default function Home() {
  return (
    <main className="main">
      <BreadCrumbs />
      <HomeNovelty />
      <HomeDishes />
      <HomeEvents />
      <HomeInfo />
    </main>
  );
}
