import "./FaqList.scss";

import FaqItem from "../FaqItem/FaqItem";

export default function FaqList() {
  const questions = [
    {
      id: 0,
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quidem obcaecati quam dignissimos, praesentium atque a debitis rerum? Ea veritatis voluptas, officia ipsum nesciunt impedit ab corporis ipsam similique totam!",
    },
    {
      id: 1,
      question: "How can i request a new browser?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quidem obcaecati quam dignissimos, praesentium atque a debitis rerum? Ea veritatis voluptas, officia ipsum nesciunt impedit ab corporis ipsam similique totam!",
    },
    {
      id: 2,
      question: "Is there a mobile app?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quidem obcaecati quam dignissimos, praesentium atque a debitis rerum? Ea veritatis voluptas, officia ipsum nesciunt impedit ab corporis ipsam similique totam!",
    },
    {
      id: 3,
      question: "What about other Chromium browsers?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quidem obcaecati quam dignissimos, praesentium atque a debitis rerum? Ea veritatis voluptas, officia ipsum nesciunt impedit ab corporis ipsam similique totam!",
    },
  ];
  return (
    <div className="faq__wrapper">
      <ul className="faq__list">
        {questions.map((quest) => (
          <FaqItem
            key={quest.id}
            question={quest.question}
            answer={quest.answer}
          />
        ))}
      </ul>
      <button className="btn__standart">More Info</button>
    </div>
  );
}
