import BreadCrumbs from "../components/BreadCrumbs";
import { CategoryList } from "../partials/Category";

export default function Category() {
  return (
    <main className="main">
      <BreadCrumbs />
      <CategoryList />
    </main>
  );
}
