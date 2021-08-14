import { EyeOutlined, SyncOutlined } from '@ant-design/icons';
import { Modal, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchUsers } from '../../services/users';
import { IUser } from '../../types';
import UserDetails from '../user-details';

import styles from './search-content.module.scss';

const SearchContent = () => {
  const pagination = useRef(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [data, setData] = useState<ReadonlyArray<IUser>>([]);
  const [user, setUser] = useState<IUser | null>(null);

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      if (data.length < 1) {
        for (let index = 1; index <= pagination.current; index++) {
          const result = await fetchUsers(`?page=${index}&results=5&seed="codechallenge"`);
          setData((prevState) => prevState.concat(result.parsedBody?.results ?? []));
        }
        return;
      }

      const result = await fetchUsers(`?page=${pagination.current}&results=5&seed="codechallenge"`);
      setData((prevState) => prevState.concat(result.parsedBody?.results ?? []));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [data.length]);

  const fetchMore = async () => {
    pagination.current += 1;
    setLoadingMore(true);
    await fetch();
    setLoadingMore(false);
    // eslint-disable-next-line no-restricted-globals
    location.hash = `page=${pagination.current}`;
  };

  const onVisualize = (email: string) => {
    const filteredUser = data.filter((i) => i.email === email)[0];
    setUser(filteredUser);
  };

  const columns: ColumnsType<IUser> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (name: IUser['name']) => `${name.first} ${name.last}`,
      width: '20%',
      sorter: (a: IUser, b: IUser): number =>
        `${a.name.first} ${a.name.last}`.localeCompare(`${b.name.first} ${b.name.last}`),
    },
    {
      title: 'Gênero',
      dataIndex: 'gender',
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      onFilter: (value, record) => record.gender.indexOf(String(value)) === 0,
    },
    {
      title: 'Data de nascimento',
      dataIndex: ['dob', 'date'],
      render: (value: string | Date) => new Date(value).toLocaleDateString(),
    },
    {
      title: 'Acções',
      dataIndex: 'email',
      render: (email: string) => (
        <EyeOutlined aria-label={`visualize-${email}`} onClick={() => onVisualize(email)} />
      ),
    },
  ];

  useEffect(() => {
    // prevent over fetching when rerendering
    if (data.length > 0) return;

    // eslint-disable-next-line no-restricted-globals
    if (location.hash) pagination.current = Number(location.hash.split('=')[1]);
    fetch();
  }, [data.length, fetch]);
  return (
    <div className={styles.root}>
      <Typography.Title level={5} className={styles.header}>
        Start searching so you can get to know the worlds most famous users.
      </Typography.Title>

      <Table
        sticky
        pagination={false}
        columns={columns}
        dataSource={data}
        loading={loading}
        scroll={{ x: '100%' }}
        rowKey={(row) => row.email}
      />

      <div onClick={fetchMore} className={styles.loadMoreButton}>
        <SyncOutlined spin={loadingMore} />
        <Typography.Link strong> Load more </Typography.Link>
      </div>

      <Modal
        closable
        keyboard
        maskClosable
        footer={null}
        visible={!!user}
        onCancel={() => setUser(null)}
      >
        <UserDetails user={user!} />
      </Modal>
    </div>
  );
};

export default SearchContent;
