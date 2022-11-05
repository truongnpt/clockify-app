import React from 'react';
import { toast } from 'react-toastify';
import styled from '@emotion/styled';

import { IconCircleWrapper, Flex, H6, Span } from 'components';
import { Close } from 'components/IconWrapper/Library';
import { ReactComponent as SuccessIcon } from 'app/components/IconWrapper/icons/circle-24/completed.svg';
import { ReactComponent as WarningIcon } from 'app/components/IconWrapper/icons/warning.svg';
import { IconWrapper } from '../IconWrapper';
import { CircleLoading } from 'components/CircleLoading';

export function ToastLoading(content, toastId: string) {
  return toast(
    <Flex justifyContent="center" color="primaryBlack" alignItems="center">
      <CircleLoading size="small" />
      {content}
    </Flex>,
    {
      toastId,
      autoClose: false,
    },
  );
}

export function ToastSuccess(title: string, message: string, options?: object) {
  return toast(
    <Flex alignItems="flex-start">
      <IconCircleWrapper icon={SuccessIcon} />
      <Flex flexDirection="column" mx="m">
        <H6>{title}</H6>
        <Span>{message}</Span>
      </Flex>
    </Flex>,
    options,
  );
}

export function ToastError(title: string, message: string, options?: object) {
  return toast(
    <Flex alignItems="flex-start">
      <BorderIconCircle bg="white">
        <IconWrapper icon={Close} fill="redPigment" />
      </BorderIconCircle>
      <Flex flexDirection="column" mx="m" mt="xs">
        <H6>{title}</H6>
        <Span>{message}</Span>
      </Flex>
    </Flex>,
    { ...options, className: 'toast-error' },
  );
}

export function ToastWarning(title: string, message: string, options?: object) {
  return toast(
    <Flex alignItems="flex-start">
      <BorderIconCircle bg="primaryBlack">
        <IconWrapper icon={WarningIcon} fill="brightYellowCrayola" />
      </BorderIconCircle>
      <Flex flexDirection="column" mx="m" mt="xs">
        <H6>{title}</H6>
        <Span>{message}</Span>
      </Flex>
    </Flex>,
    { ...options, className: 'toast-warning' },
  );
}

export const BorderIconCircle = styled.div<any>`
  padding: 4px 5px 5px;
  border-radius: 50%;
  background: ${p => p.theme.colors[p.bg]};
`;
