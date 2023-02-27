import { UserAvatarDefault } from './components';

import styles from './styles.module.scss';

interface IUserProfile {
  full_name: string;
  avatar: string;
}
interface IHeaderUserSection {
  profile: IUserProfile;
}

export const HeaderUserSection = ({ profile }: IHeaderUserSection) => (
  <div className={styles.container}>
    {profile?.avatar ? <img src={profile.avatar} /> : <UserAvatarDefault name={profile?.full_name} />}
    <span className={styles.name}>{profile?.full_name}</span>
  </div>
);
