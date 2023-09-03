import css from '../FriendList/FriendList.module.css';
import friends from '../FriendList/friends.json';

export const FriendList = () => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        const statusClassName = isOnline ? css.online : css.offline;
        return (
          <li className={css.item} key={id}>
            <span className={`${css.status} ${statusClassName}`}></span>
            <img src={avatar} alt={name} className={css.avatar} />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};




