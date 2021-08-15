import { ConfigProvider } from 'antd';
import { Header, SearchContent } from './components';
import en_US from 'antd/lib/locale/en_US';
const App = () => {
  return (
    <>
      <ConfigProvider locale={en_US}>
        <Header />
        <SearchContent />
      </ConfigProvider>
    </>
  );
};

export default App;
