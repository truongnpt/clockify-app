/**
 *
 * CircleLoading
 *
 */
import React from 'react';
import styled from '@emotion/styled';
import { IconWrapper } from '../IconWrapper';
import { ReactComponent as LoadingIcon } from '../IconWrapper/icons/circle-24/loading.svg';
import { Flex, Span } from '../Common';

interface Props {
  content?: string;
  size?: string;
}

export function CircleLoading(props: Props) {
  return (
    <Flex alignItems="center">
      <Loading
        icon={LoadingIcon}
        size={props.size ? props.size : 'small'}
        className="loading"
      />
      {props.content ? <Span ml="s">{props.content}</Span> : ''}
    </Flex>
  );
}

const Loading = styled(IconWrapper)<any>`
  animation: circleLoading infinite 1s linear;
  @keyframes circleLoading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
