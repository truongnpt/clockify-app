/**
 *
 * Tabs
 *
 */

import styled from '@emotion/styled';
import React, { useCallback } from 'react';
import { Tab, Tabs as TabsWrapper, TabList, TabPanel } from 'react-tabs';

interface TabInfo {
  id: string;
  title: string;
  contents: any;
}

interface TabProps {
  tabs: TabInfo[];
  contents: any;
}
export function Tabs(props: TabProps) {
  const { tabs, contents } = props;
  const renderTabLists = () => {
    return tabs.map(tab => {
      return (
        <Tab key={tab.id} id={tab.id}>
          {tab.title}
        </Tab>
      );
    });
  };
  return (
    <StyledTabs>
      <TabList>{renderTabLists()}</TabList>
      {contents}
    </StyledTabs>
  );
}

const StyledTabs = styled(TabsWrapper)<any>`
  width: 100%;
  .react-tabs {
    &__tab-list {
      padding-left: 0;
      border-bottom: 1px solid ${p => p.theme.colors.primaryGreen};
    }

    &__tab {
      text-transform: uppercase;
      color: ${p => p.theme.colors.dimGray};
      font-weight: ${p => p.theme.fontWeights.medium};

      &--selected {
        border-color: ${p => p.theme.colors.primaryGreen};
        background-color: ${p => p.theme.colors.primaryGreen};
        color: ${p => p.theme.colors.white};
      }
    }

    &__tab-panel {
      color: ${p => p.theme.colors.dimGray};
    }
  }
`;
