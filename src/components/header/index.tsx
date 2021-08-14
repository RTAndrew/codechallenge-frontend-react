import { Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.company}>
        <Typography.Title level={4}> Generic Logo </Typography.Title>
      </div>
      <div className={styles.user}>
        <Avatar shape="circle" icon={<UserOutlined />} />
      </div>
    </div>
  );
};

export default Header;
