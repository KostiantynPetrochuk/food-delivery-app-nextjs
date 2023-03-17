import BreadCrumbs from "../components/BreadCrumbs";
import OrderingButtons from "../components/OrderingButtons";
import OrderingSteps from "../components/OrderingSteps";
import { OrderingComposition, OrderingForm } from "../partials/Ordering";

import "./page.scss";

export default function Ordering() {
  return (
    <main className="main">
      <BreadCrumbs />
      <section className="basket">
        <div className="container">
          <div className="basket-inner">
            <OrderingSteps />
            <div className="basket-ordering">
              <OrderingForm />
              <OrderingComposition />
            </div>
            <OrderingButtons />
          </div>
        </div>
      </section>
    </main>
  );
}
