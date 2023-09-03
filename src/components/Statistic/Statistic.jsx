import css from '../Statistic/Statistic.module.css';
import data from '../Statistic/data.json';

export const Statistic = () => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Statistics</h2>
      <ul className={css['stat-list']}>
        {data.map(({ label, percentage, id }) => { 
          return (
            <li className={css.item} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistic;