export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
}
export interface UserCardProps {
  id: number;
  name: string;
  email: string;
  city: string;
  company: string;
  phone: string;
  website: string;
}

export interface InfoProps {
  icon: React.ReactNode;
  value: string;
}

export interface LinkProps {
  icon: React.ReactNode;
  value: string;
  name: string;
}

export interface ErrorProps {
  message: string;
}

export interface PageHeaderProps {
  title: string;
  subHeader: string;
}
