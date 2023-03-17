import "./page.scss";

export default function Confirmed() {
  return (
    <main className="main">
      <section className="confirmed">
        <div className="confirmed-title">Замовлення підтверджено!</div>
        <div className="confirmed-icon">
          <span className="confirmed-icon-item"></span>
        </div>
        <div className="confirmed-info">
          Менеджер зв&apos;яжеться з вами наближчим часом, для уточнення деталей
          замовлення.
        </div>
      </section>
    </main>
  );
}
