import styles from './styles.module.scss';

interface IUserAvatarDefault {
  name: string;
}

export const UserAvatarDefault = ({ name }: IUserAvatarDefault) => (
  <span className={styles.defaultAvatar}>{name[0].toUpperCase()}</span>
);
