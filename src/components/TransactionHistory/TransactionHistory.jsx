import Transaction from "../Transaction/Transaction";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tbody}>
        {items.map((transaction) => {
          return (
            <Transaction
              key={transaction.id}
              type={
                transaction.type[0].toUpperCase() + transaction.type.slice(1)
              }
              amount={transaction.amount}
              currency={transaction.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
