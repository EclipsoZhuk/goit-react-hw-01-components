import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
    return (
        <table className={s.table}>
            <thead className={s.head}>
                <tr>
                    <th className={s.item}>Type</th>
                    <th className={s.item}>Amount</th>
                    <th className={s.item}>Currency</th>
                </tr>
            </thead>

            <tbody className={s.body}>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id} className={s.list}>
                        <td className={s.item}>{type}</td>
                        <td className={s.item}>{amount}</td>
                        <td className={s.item}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};
