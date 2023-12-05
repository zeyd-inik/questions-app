import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const SingleQuestion = ({ id, title, info }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <article className="single-question">
      <div className="part-A">
        <h3 className="question">{title}</h3>
        <button
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          {isActive ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {isActive && <p className="part-B">{info}</p>}
    </article>
  );
};
export default SingleQuestion;
