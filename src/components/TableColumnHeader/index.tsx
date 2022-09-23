import styled from '@emotion/styled';
import React from 'react';
import { Flex, IconWrapper, Span } from 'components';
import { OrderIcon } from '../IconWrapper/Library';

interface Props {
  title: string;
  isSorted: boolean;
  isSortedDesc: boolean;
  isTitleHidden?: boolean;
  isSortDisabled?: boolean;
}

export function TableColumnHeader(props: Props) {
  const { title, isTitleHidden, isSortDisabled } = props;

  return (
    <Flex alignItems="baseline">
      {!isTitleHidden && (
        <Flex width="max-content" alignItems="center">
          {!isSortDisabled && (
            <SortIcon icon={OrderIcon} fill="dimGray" {...props} />
          )}
          <Span variant="smallBold" color="dimGray">
            {title}
          </Span>
          {!isSortDisabled && (
            <SortIcon icon={OrderIcon} fill="dimGray" {...props} />
          )}
        </Flex>
      )}
    </Flex>
  );
}

const SortIcon = styled(IconWrapper)`
  margin-bottom: 2.5px;
  svg {
    width: 20px;
    height: 20px;
  }
  #order-acs {
    display: ${p => (p.isSorted && p.isSortedDesc ? 'none' : 'block')};
  }
  #order-desc {
    display: ${p => (p.isSorted && !p.isSortedDesc ? 'none' : 'block')};
  }
`;
