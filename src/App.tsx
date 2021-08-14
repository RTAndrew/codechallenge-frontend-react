import { ConfigProvider } from 'antd';
import { Header, SearchContent } from './components';
import pt_PT from 'antd/lib/locale/pt_PT';
const App = () => {
  return (
    <>
      <ConfigProvider locale={pt_PT}>
        <Header />
        <SearchContent />
      </ConfigProvider>
    </>
  );
};

export default App;
