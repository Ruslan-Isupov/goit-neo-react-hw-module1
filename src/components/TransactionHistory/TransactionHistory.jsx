import { Transaction } from "../Transaction/Transaction";
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
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
          
            // <tr key={transaction.id}>
            <Transaction
              key={transaction.id}
              type={
                transaction.type[0].toUpperCase() + transaction.type.slice(1)
              }
              amount={transaction.amount}
              currency={transaction.currency}
            />
            // </tr>
         
        );
      })}
         </tbody>
    </table>
  );
};

{/* <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>; */}
