import { social } from '../../documentation/social';
import Button from '../MiniComponents/Button';
import cls from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={cls.root}>
            <h1>JOIN OUR NEWSLETTER</h1>
            <div className={cls.emailInput}>
                <input type='email' placeholder='ENTER YOUR E-MAIL ADDRESS HERE' />
            </div>
            <div className={cls.submitBtn}>
                <Button>Submit</Button>
            </div>
            <div className={cls.social}>
                <ul>
                    {
                        social.map(({ id, title, link }) => (
                            <li key={id}>
                                <a rel='noreferrer' target='_blank' href={link}>{title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Footer