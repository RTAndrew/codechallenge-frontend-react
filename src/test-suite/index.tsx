import { FC } from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider } from 'antd';
import pt_PT from 'antd/lib/locale/pt_PT';
import { TCustomRender } from './test-suite.types';

const AllTheProviders: FC = ({ children }) => {
  return <ConfigProvider locale={pt_PT}>{children}</ConfigProvider>;
};

const customRender: TCustomRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
