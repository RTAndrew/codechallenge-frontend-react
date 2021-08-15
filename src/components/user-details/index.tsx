import { UserDetailsProps } from './user-details.types';

import styles from './user-details.module.scss';
import { Divider, Space, Typography } from 'antd';

interface Field {
  label: string;
  description: string;
}

const UserDetails = ({ user }: UserDetailsProps) => {
  const credentials: ReadonlyArray<Field> = [
    {
      label: 'ID',
      description: user.id.value ?? '',
    },
    {
      label: 'Username',
      description: user.login.username,
    },

    {
      label: 'UUID',
      description: user.login.uuid,
    },
  ];
  const fields: ReadonlyArray<Field> = [
    {
      label: 'Full Name',
      description: `${user.name.first} ${user.name.last}`,
    },
    {
      label: 'Email',
      description: user.email,
    },
    {
      label: 'Gender',
      description: user.gender,
    },
    {
      label: 'Birthdate',
      description: `${user.dob.age} years old, ${new Date(user.dob.date).toLocaleDateString()}`,
    },
    {
      label: 'Phone',
      description: user.phone,
    },
    {
      label: 'Country',
      description: user.location.country,
    },
  ];

  return (
    <div className={styles.root}>
      <img
        className={styles.profilePicture}
        src={user.picture.large}
        alt={`user-${user.email}-profile`}
      />
      <div className={styles.contentWrapper}>
        <Typography.Title level={4}> Credentials </Typography.Title>
        {credentials.map((i, idx) => (
          <Space wrap key={`${i.description}${idx}`}>
            <Typography.Title level={5} type="secondary">
              {i.label}:
            </Typography.Title>
            <Typography.Title level={5}> {i.description} </Typography.Title>
          </Space>
        ))}

        <Divider />

        <Typography.Title level={4}> General Info. </Typography.Title>
        {fields.map((i, idx) => (
          <Space wrap key={`${i.description}${idx}`}>
            <Typography.Title level={5} type="secondary">
              {i.label}:
            </Typography.Title>
            <Typography.Title level={5}> {i.description} </Typography.Title>
          </Space>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
