import ThankYouIcon from '../../assets/images/icon-thank-you.svg';
import styles from './Success.module.css';

const Success = () => {
    return (
        <section className={styles.container}>
            <img src={ThankYouIcon} alt='Thank you icon' />
            <h1>Thank you</h1>
            <h2>
                Thanks for confirming your subscription! We hope you have fun using our platform. If
                you ever need support, please feel free to email us at support@loremgaming.com.
            </h2>
        </section>
    );
};
export default Success;
