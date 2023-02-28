import { IProfile } from '../../api';
import { UserAvatar } from '../user-avatar';

import styles from './styles.module.scss';

interface IHeaderUserSection {
  profile: IProfile;
}

export const HeaderUserSection = ({ profile }: IHeaderUserSection) => (
  <div className={styles.container}>
    <span className={styles.name}>{profile?.full_name}</span>
    <UserAvatar profile={profile} size="40px" />
  </div>
);
