import { SyncOutlined } from '@ant-design/icons';
import { Avatar, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchUsers } from '../../services/users';
import { IUser } from '../../types';

import styles from './search-content.module.scss';

const SearchContent = () => {
  const pagination = useRef(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [data, setData] = useState<ReadonlyArray<IUser>>([]);

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      const result = await fetchUsers(`?page=${pagination.current}&results=5`);
      setData((prevState) => prevState.concat(result.parsedBody?.results ?? []));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchMore = async () => {
    pagination.current += 1;
    setLoadingMore(true);
    await fetch();
    setLoadingMore(false);
  };

  const columns: ColumnsType<IUser> = [
    {
      title: ' ',
      dataIndex: ['picture', 'thumbnail'],
      render: (value: string) => <Avatar src={value} />,
    },
    {
      title: 'ID',
      dataIndex: ['id', 'value'],
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (name: IUser['name']) => `${name.first} ${name.last}`,
      width: '20%',
      sorter: (a: IUser, b: IUser): number =>
        `${a.name.first} ${a.name.last}`.localeCompare(`${b.name.first} ${b.name.last}`),
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Gênero',
      dataIndex: 'gender',
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      width: '20%',
    },
    {
      title: 'Data de nascimento',
      dataIndex: ['dob', 'date'],
      render: (value: string | Date) => new Date(value).toLocaleDateString(),
    },
    {
      title: 'Telefone',
      dataIndex: 'phone',
    },
    {
      title: 'Nacionalidade',
      dataIndex: ['location', 'state'],
    },
    {
      title: 'Endereço',
      dataIndex: ['location', 'street'],
    },
  ];

  useEffect(() => {
    // prevent over fetching when rerendering
    if (data.length > 0) return;
    fetch();
  }, [data.length, fetch]);
  return (
    <div className={styles.root}>
      <Typography.Title level={5} className={styles.header}>
        Start searching so you can get to know the worlds most famous users.
      </Typography.Title>

      <Table
        pagination={false}
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey={(row) => row.email}
      />

      <div onClick={fetchMore} className={styles.loadMoreButton}>
        <SyncOutlined spin={loadingMore} />
        <Typography.Link strong> Load more </Typography.Link>
      </div>
    </div>
  );
};

export default SearchContent;
