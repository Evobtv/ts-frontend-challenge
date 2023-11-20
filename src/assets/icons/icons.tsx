import React from 'react';

interface UserIconProps {
    strokeColor?: string;
}

export const UserIcon: React.FC<UserIconProps> = ({ strokeColor  }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 25 25"
    fill='none'
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginBottom: '2px' }}
  >
    <path
      id="Vector"
      d="M16 7C16 8.06087 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.06087 8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V7ZM12 14C10.1435 14 8.36301 14.7375 7.05025 16.0503C5.7375 17.363 5 19.1435 5 21H19C19 19.1435 18.2625 17.363 16.9497 16.0503C15.637 14.7375 13.8565 14 12 14V14Z"
      stroke={strokeColor  || '#FFFFFF'}
      strokeWidth="2"
    />
  </svg>
);

export const LockClosedIcon: React.FC<UserIconProps> = ({ strokeColor  }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 25 25"
    fill='none'
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginBottom: '2px' }}
  >
    <path 
      d="M12 15V17M6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V13C20 12.4696 19.7893 11.9609 19.4142 11.5858C19.0391 11.2107 18.5304 11 18 11H6C5.46957 11 4.96086 11.2107 4.58579 11.5858C4.21071 11.9609 4 12.4696 4 13V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21ZM16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11H16Z"
      stroke={strokeColor  || '#FFFFFF'}
      strokeWidth="2"
    />
  </svg>
);

export const MailIcon: React.FC<UserIconProps> = ({ strokeColor  }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 25 25"
    fill='none'
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginBottom: '2px' }}
  >
    <path 
      d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
      stroke={strokeColor  || '#FFFFFF'}
      strokeWidth="2"
    />
  </svg>
);