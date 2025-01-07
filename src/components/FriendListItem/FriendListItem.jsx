import css from "./FriendListItem.module.css"
export const FriendListItem = ({ avatar, name, isOnline }) => {


  return <>
    <div className={css.wrapper}>
      <img
        className={css.avatar}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.true : css.false}> {isOnline ? 'Online' : 'Offline'}</p>
    </div>
  </>
}
