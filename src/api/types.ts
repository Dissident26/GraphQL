export interface ISkillMastery {
  skill_name: string;
  mastery: string;
}

export interface ISkill {
  id: string;
  created_at: string;
  name: string;
}

export interface ILanguageProficiency {
  language_name: string;
  proficiency: string;
}

export interface IProfile {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  full_name: string;
  avatar: string;
  skills: ISkillMastery[];
  languages: ILanguageProficiency[];
}

export interface IDepartment {
  id: string;
  created_at: string;
  name: string;
}

interface IProject {
  id: string;
  created_at: string;
  name: string;
  internal_name: string;
  description: string;
  domain: string;
  start_date: string;
  end_date: string;
  team_size: number;
  tech_stack: ISkill[];
}

export interface ICv {
  id: string;
  created_at: string;
  name: string;
  description: string;
  user: IUser;
  projects: IProject[];
  skills: ISkillMastery[];
  languages: ILanguageProficiency[];
  is_template: boolean;
}

export interface IPosition {
  id: string;
  created_at: string;
  name: string;
}

export interface IUser {
  id: string;
  created_at: string;
  email: string;
  is_verified: boolean;
  profile: IProfile;
  cvs: ICv;
  department: IDepartment;
  department_name: string;
  position: IPosition;
  position_name: string;
  role: string;
}

export interface IGetUsersResponse {
  users: IUser[];
}

export interface IGetUserResponse {
  user: IUser;
}
