import s from './Information.module.scss';
import Image from 'next/image';
import data from '../../../data.json';

const Information = () => {
    return (
        <section className={s.information}>
            <ul className={s.information__blockWrap}>
                {data.information.map(({ question, answer, image }, index) => {
                    const isLeftSide = (index + 1) % 2 === 0;
                    return (
                        <li className={`${s.information__block} ${isLeftSide ? s['information__block--imageLeft'] : s['information__block--imageRight']}`} key={index}>
                            <div className={`${s.information__blockImgWrap} ${isLeftSide ? s['information__blockImgWrap--imageLeft'] : s['information__blockImgWrap--imageRight']}`}>
                                <Image src={image} alt='demonstrative image' width={225} height={225} />
                            </div>
                            <div className={`${s.information__blockTextWrap} ${isLeftSide ? s['information__blockTextWrap--imageLeft'] : s['information__blockTextWrap--imageRight']}`}>
                                <h2 className={s.information__blockHeading}>{question}</h2>
                                <p className={s.information__blockText}>
                                    {answer.split('\n').map((line) => {
                                        return (
                                            <>
                                                {line}
                                                <br />
                                            </>
                                        );
                                    })}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default Information;