import { IProfile } from '../../api';
import { UserAvatarDefault } from './components';

interface IUserAvatar {
  profile: IProfile;
  size: string;
}

export const UserAvatar = ({ profile, size }: IUserAvatar) => {
  return profile?.avatar ? (
    <img width={size} height={size} src={profile?.avatar} />
  ) : (
    <UserAvatarDefault name={profile?.first_name || profile?.full_name} />
  );
};
