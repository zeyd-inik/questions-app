import SingleQuestion from './SingleQuestion';
const Questions = ({ questions }) => {
  return (
    <section className="questions">
      <h1>Questions</h1>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
  );
};
export default Questions;
