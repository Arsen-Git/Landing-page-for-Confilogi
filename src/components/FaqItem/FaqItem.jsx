import "./FaqItem.scss";

export default function FaqItem({ question, answer }) {
  return (
    <details className="faq__container">
      <summary className="faq__title">{question}</summary>
      <p className="faq__text">{answer}</p>
    </details>
  );
}
