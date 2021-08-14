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
      description: user.id.value,
    },
    {
      label: 'Nome de usuário',
      description: user.login.username,
    },

    {
      label: 'UUID',
      description: user.login.uuid,
    },
  ];
  const fields: ReadonlyArray<Field> = [
    {
      label: 'Nome completo',
      description: `${user.name.first} ${user.name.last}`,
    },
    {
      label: 'Email',
      description: user.email,
    },
    {
      label: 'Gênero',
      description: user.gender,
    },
    {
      label: 'Data de nascimento',
      description: `${user.dob.age} anos, ${new Date(user.dob.date).toLocaleDateString()}`,
    },
    {
      label: 'Telefone',
      description: user.phone,
    },
    {
      label: 'Nacionalidade',
      description: user.location.state,
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
        <Typography.Title level={4}> Credencias </Typography.Title>
        {credentials.map((i) => (
          <>
            <Space wrap>
              <Typography.Title level={5} type="secondary">
                {i.label}:
              </Typography.Title>
              <Typography.Title level={5}> {i.description} </Typography.Title>
            </Space>
          </>
        ))}

        <Divider />

        <Typography.Title level={4}> Info. Geral </Typography.Title>
        {fields.map((i) => (
          <>
            <Space wrap>
              <Typography.Title level={5} type="secondary">
                {i.label}:
              </Typography.Title>
              <Typography.Title level={5}> {i.description} </Typography.Title>
            </Space>
          </>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
