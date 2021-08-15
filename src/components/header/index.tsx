import { Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './header.module.scss';
import { config } from '../../config';

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.company}>
        <Typography.Title level={4}> {config.CompanyName} </Typography.Title>
      </div>
      <div className={styles.user}>
        <Avatar shape="circle" icon={<UserOutlined aria-label="user-profileImage" />} />
      </div>
    </div>
  );
};

export default Header;
