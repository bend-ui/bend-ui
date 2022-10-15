import { useState } from 'react';
import { createContext } from '../../utils';

export const [TabsProvider, useTabsContext] = createContext<{
  activeTab?: string;
  setActiveTab?: React.Dispatch<React.SetStateAction<string | undefined>>;
}>('TabsContext');

export interface UseTabsProps {
  defaultTab?: string;
}

export const useTabs = (props: UseTabsProps = {}) => {
  const { defaultTab } = props;
  const [activeTab, setActiveTab] = useState(defaultTab);

  const context = {
    activeTab,
    setActiveTab,
  };

  return context;
};

export const useTabList = () => {
  const getTablistProps = () => ({ role: 'tablist' });

  return { getTablistProps };
};

export const useTab = (value) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const getTabProps = () => ({
    role: 'tab',
    'aria-controls': value,
    'aria-selected': activeTab === value,
    onClick: () => setActiveTab?.(value),
  });

  return { getTabProps };
};

export const useTabPanel = (value) => {
  const { activeTab } = useTabsContext();

  const getTabpanelProps = () => ({
    role: 'tabpanel',
    'aria-labelledby': value,
    style: {
      display: activeTab === value ? undefined : 'none',
    },
  });
  return { getTabpanelProps };
};
