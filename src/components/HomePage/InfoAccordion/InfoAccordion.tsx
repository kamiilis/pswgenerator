'use client';
import { useState } from 'react';
import InfoAccordionItem from '../InfoAccordionItem/InfoAccordionItem';
import s from './InfoAccordion.module.scss';
import data from '../../../data.json';

const InfoAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={s.infoAccordion}>
      {data.information.map(({ question, answer, image }, index) => (
        <InfoAccordionItem
          key={index}
          index={index}
          question={question}
          answer={answer}
          image={image}
          isOpen={index === openIndex}
          toggleAnswer={toggleAnswer}
        />
      ))}
    </div>
  );
}

export default InfoAccordion;