import { useState } from 'react';
import { createContext } from '../../utils';

export const [TabsProvider, useTabsContext] = createContext<{
  activeTab?: string;
  setActiveTab?: React.Dispatch<React.SetStateAction<string | undefined>>;
}>('TabsContext');

export interface UseTabsProps {
  defaultValue?: string;
}

export const useTabs = (props: UseTabsProps = {}) => {
  const { defaultValue } = props;
  const [activeTab, setActiveTab] = useState(defaultValue);

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

export const useTab = (value: string) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;
  const getTabProps = () => ({
    role: 'tab',
    'aria-controls': value,
    'aria-selected': isActive,
    onClick: () => setActiveTab?.(value),
    'data-state': isActive ? 'active' : 'inactive',
  });

  return { getTabProps };
};

export const useTabPanel = (value) => {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === value;

  const getTabPanelProps = () => ({
    role: 'tabpanel',
    'aria-labelledby': value,
    'data-state': isActive ? 'active' : 'inactive',
    hidden: isActive ? false : true,
  });
  return { getTabpanelProps: getTabPanelProps };
};
