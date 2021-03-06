import { EyeOutlined, SyncOutlined } from '@ant-design/icons';
import { Input, Modal, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { config } from '../../config';
import { fetchUsers } from '../../services/users';
import { IUser } from '../../types';
import UserDetails from '../user-details';

import styles from './search-content.module.scss';

const SearchContent = () => {
  const pagination = useRef(1);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [data, setData] = useState<ReadonlyArray<IUser>>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(false);

  const fetch = useCallback(async () => {
    try {
      setError(false);
      setLoading(true);
      if (data.length < 1) {
        for (let index = 1; index <= pagination.current; index++) {
          const result = await fetchUsers(
            `?page=${index}&results=${config.ApiResultsPerPage}&seed="codechallenge"`,
          );
          setData((prevState) => prevState.concat(result.parsedBody?.results ?? []));
        }
        return;
      }

      const result = await fetchUsers(
        `?page=${pagination.current}&results=${config.ApiResultsPerPage}&seed="codechallenge"`,
      );
      setData((prevState) => prevState.concat(result.parsedBody?.results ?? []));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [data.length]);

  const fetchMore = async () => {
    pagination.current += 1;
    await fetch();
    // eslint-disable-next-line no-restricted-globals
    location.hash = `page=${pagination.current}`;
  };

  const onVisualize = (email: string) => {
    const filteredUser = data.filter((i) => i.email === email)[0];
    setUser(filteredUser);
  };

  const filteredSearch = useMemo(() => {
    if (searchQuery === '') return null;

    const filteredByName = data.filter((i) =>
      `${i.name.first} ${i.name.last}`.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    const filteredByNationality = data.filter((i) =>
      i.location.country.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return filteredByName.length > 0 ? filteredByName : filteredByNationality;
  }, [data, searchQuery]);

  const columns: ColumnsType<IUser> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (name: IUser['name']) => `${name.first} ${name.last}`,
      sorter: (a: IUser, b: IUser): number =>
        `${a.name.first} ${a.name.last}`.localeCompare(`${b.name.first} ${b.name.last}`),
    },
    {
      title: 'Gender',
      responsive: ['sm'],
      dataIndex: 'gender',
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      onFilter: (gender, record) => record.gender.indexOf(String(gender)) === 0,
    },
    {
      responsive: ['sm'],
      title: 'Birthdate',
      dataIndex: ['dob', 'date'],
      render: (dob: string | Date) => new Date(dob).toLocaleDateString(),
    },
    {
      title: 'Country',
      dataIndex: ['location', 'country'],
    },
    {
      title: 'Actions',
      dataIndex: 'email',
      render: (email: string) => (
        <EyeOutlined aria-label={`visualize-user-${email}`} onClick={() => onVisualize(email)} />
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

  if (error) return <> Oops. We are facing some problems. ???? </>;

  return (
    <div className={styles.root}>
      <span>
        <Typography.Title level={5}> {config.Headline} </Typography.Title>
        <Typography.Title level={5} style={{ margin: 0 }}>
          {config.Motto}
        </Typography.Title>
      </span>

      <Input.Search
        allowClear
        size="large"
        enterButton
        className={styles.searchBar}
        onSearch={(value) => setSearchQuery(value)}
        placeholder="Type the username or the country"
      />

      <Table
        sticky
        size="large"
        loading={loading}
        columns={columns}
        pagination={false}
        scroll={{ x: 240 }}
        rowKey={(row) => row.email}
        dataSource={filteredSearch ?? data}
      />

      <div onClick={fetchMore} className={styles.loadMoreButton}>
        <SyncOutlined aria-label="loadmore-icon" spin={loading} />
        <Typography.Link strong> Load more </Typography.Link>
      </div>

      <Modal
        closable
        keyboard
        maskClosable
        destroyOnClose
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
