import BreadCrumbs from "../components/BreadCrumbs";
import OrderingButtons from "../components/OrderingButtons";
import OrderingSteps from "../components/OrderingSteps";
import {
  BasketCustoms,
  BasketOrderAmount,
  BasketSauces,
} from "../partials/Basket";

export default function Basket() {
  return (
    <main className="main">
      <BreadCrumbs />
      <section className="basket">
        <div className="container">
          <div className="basket-inner">
            <OrderingSteps />
            <BasketCustoms />
            <BasketSauces />
            <BasketOrderAmount amount={1500} />
            <OrderingButtons />
          </div>
        </div>
      </section>
    </main>
  );
}
