import { useRef } from 'react';
import s from './InfoAccordionItem.module.scss';
import Image from 'next/image';

type Props = {
  index: number,
  question: string,
  image: string,
  answer: string,
  isOpen: boolean,
  toggleAnswer: (index: number) => void
};

const InfoAccordionItem = ({ index, question, image, answer, isOpen, toggleAnswer }: Props) => {
  const answerRef = useRef<HTMLParagraphElement>(null);

  const getHeight = () => {
    if (answerRef.current) {
      return isOpen ? `${answerRef.current.scrollHeight}px` : '0';
    }
  };

  return (
    <section className={s.infoAccordionItem} onClick={() => toggleAnswer(index)}>
      <div className={s.infoAccordionItem__imageWrap}>
        <Image src={image} alt="text" width={125} height={125} />
      </div>
      <div className={s.infoAccordionItem__questionBox}>
        <h3 className={s.infoAccordionItem__question} >{question}</h3>
        <div className={s.infoAccordionItem__cross}>
          <div className={`${s.infoAccordionItem__crossSymbolOne} ${isOpen ? `${s['infoAccordionItem__crossSymbolOne--active']}` : ''}`}></div>
          <div className={`${s.infoAccordionItem__crossSymbolTwo} ${isOpen ? `${s['infoAccordionItem__crossSymbolTwo--active']}` : ''}`}></div>
        </div>
      </div>
      <p className={s.infoAccordionItem__answerWrapper} style={{ maxHeight: getHeight() }} ref={answerRef} >
        <span className={s.infoAccordionItem__answer}>
          {answer.split('\n').map((line, index) => {
            return (
              <span key={index}>
                {line}
                <br />
              </span>
            );
          })}
        </span>
      </p>
    </section>
  );
};

export default InfoAccordionItem;