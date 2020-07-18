import css from './card.module.scss';

const Card = ({ children }) => {
    return <div className={css.card}>{children}</div>
  }
  
export default Card;
