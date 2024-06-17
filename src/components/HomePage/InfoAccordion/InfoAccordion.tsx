'use client';
import { useState } from 'react';
import InfoAccordionItem from '../InfoAccordionItem/InfoAccordionItem';
import s from './InfoAccordion.module.scss';
import data from '../../../data.json';

type Information = {
  question: string,
  answer: string,
  image: string,
  id: number
};

const InfoAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={s.infoAccordion}>
      {data.information.map(({ question, answer, image, id }: Information) => (
        <InfoAccordionItem
          key={id}
          index={id}
          question={question}
          answer={answer}
          image={image}
          isOpen={id === openIndex}
          toggleAnswer={toggleAnswer}
        />
      ))}
    </div>
  );
}

export default InfoAccordion;