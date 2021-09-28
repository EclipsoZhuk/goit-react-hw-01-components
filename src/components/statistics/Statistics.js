import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
    const addMakeColor = value => {
        const maxColor = 244;
        const someColorShift = 200;

        return `hsl(${(value * maxColor) / 100 + someColorShift}deg 100% 50%)`;
    };
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title.toUpperCase()}</h2>}

            <ul className={s.statList}>
                {stats.map(({ id, percentage, label }) => (
                    <li
                        key={id}
                        className={s.item}
                        style={{
                            backgroundColor: addMakeColor(percentage),
                        }}
                    >
                        <span className={s.label}>{label}</span>
                        <span className={s.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.oneOf(['.docx', '.pdf', '.mp3', '.psd'])
                .isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
    ),
};
