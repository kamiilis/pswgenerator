import s from './TopMessage.module.scss';
import data from '../../../data.json';

const TopMessage = () => {
    return (
        <p className={s.topMessage}>
            {data.topMessage}
            <a className={s.topMessage__link} href="/learn-more">Learn More</a>
        </p>
    );
}

export default TopMessage;