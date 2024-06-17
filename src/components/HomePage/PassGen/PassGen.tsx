'use client';
import s from './PassGen.module.scss';
import ArrowRound from './Icons/ArrowRound';
import { useState, ChangeEvent } from 'react';

type CheckboxStates = {
    lowerCase: boolean;
    upperCase: boolean;
    specialSymbols: boolean;
    numbers: boolean;
};
const passwordLength: number = 20;

const PassGen = () => {
    const [popup, setPopup] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [checkboxes, setCheckboxes] = useState<CheckboxStates>({
        lowerCase: true,
        upperCase: true,
        specialSymbols: true,
        numbers: true,
    });

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        const newCheckboxes = {
            ...checkboxes,
            [name]: checked,
        };

        const isAtLeastOneChecked = Object.values(newCheckboxes).some((item) => item);
        if (isAtLeastOneChecked) {
            setCheckboxes(newCheckboxes);
        }
    };

    const generatePassword = () => {
        let stringOfElements = "";
        let newPassword = "";

        if (checkboxes.specialSymbols) stringOfElements += "!@#$%^&*()";
        if (checkboxes.numbers) stringOfElements += "0123456789";
        if (checkboxes.lowerCase) stringOfElements += "abcdefghijklmnopqrstuvwxyz";
        if (checkboxes.upperCase) stringOfElements += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        Array.from({ length: passwordLength }).forEach(() => {
            newPassword += stringOfElements.charAt(Math.floor(Math.random() * stringOfElements.length));
        });

        setPassword(newPassword);
    };

    const handleCopyStateValue = () => {
        if (password.length !== 0) {
            navigator.clipboard.writeText(password);
            handlePopup();
        } else {
            navigator.clipboard.writeText('');
        }
    };

    const handlePopup = () => {
        setPopup(true);
        setTimeout(() => {
            setPopup(false);
        }, 750);
    };

    return (
        <section className={s.passGen}>
            <div className={s.passGen__contentWrap}>
                <div className={s.passGen__content}>
                    <h1 className={s.passGen__header}>Generate strong passwords</h1>
                    <p className={s.passGen__headingText}>Upgrade the security of your online accounts. </p>
                    <p className={s.passGen__headingText}>Create strong passwords that are completely random and impossible to guess.</p>
                    <form className={s.form}>
                        <div className={s.form__passwordBox}>
                            <div className={s.form__inputBox}>
                                <div className={`${s.form__popup} ${popup ? s['animation'] : ''}`}>Copied!</div>
                                <input
                                    value={password}
                                    className={s.form__passwordInput}
                                    type="text"
                                    disabled
                                />
                                <ArrowRound className={s.form__passwordArrow} generatePassword={generatePassword} />
                            </div>
                            <button className={s.form__copyPassword} type="button">
                                <span onClick={() => handleCopyStateValue()}>Copy Password</span>
                                <span onClick={() => handleCopyStateValue()}>Copy</span>
                            </button>
                        </div>
                        <ul className={s.form__selectBoxListWrap}>
                            {Object.keys(checkboxes).map((checkboxName, index) => {
                                return (
                                    <li className={s.form__selectBox} key={index}>
                                        <input
                                            type="checkbox"
                                            name={checkboxName}
                                            id={checkboxName}
                                            checked={checkboxes[checkboxName as keyof CheckboxStates]}
                                            onChange={handleCheckboxChange}
                                        />
                                        <label htmlFor={checkboxName} className={s.form__selectBoxLabel}>
                                            {checkboxName}
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default PassGen;