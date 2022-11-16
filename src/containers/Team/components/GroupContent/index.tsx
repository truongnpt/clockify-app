/**
 *
 * GroupContent
 *
 */

import React, { useMemo } from 'react';
import { Box, Button, DropDownWrapper, Flex, IconWrapper, P } from 'components';
import { Span } from 'components';
import styled from '@emotion/styled';
import { InputDotMenu } from 'components/IconWrapper/Global';
import { CustomTableOnTabs } from 'components/TableContainer/components/CustomTableOnTabs';
import { actions, sliceKey, reducer } from '../AddOrEditGroupModal/slice';
import { addOrEditGroupModalSaga } from '../AddOrEditGroupModal/saga';
import { useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { AddOrEditGroupModal } from '../AddOrEditGroupModal';

export const tableInfo = {
  tableName: 'groups',
  columns: [
    {
      id: 'name',
      value: 'name',
      checked: true,
      label: 'Name',
      isTitleHidden: false,
      isSortDisabled: true,
    },
    {
      id: 'access',
      value: 'access',
      checked: true,
      label: 'Access Member',
      isTitleHidden: false,
      isSortDisabled: true,
    },
    {
      id: 'status',
      value: 'status',
      checked: true,
      label: 'Status',
      isTitleHidden: false,
      isSortDisabled: true,
    },
  ],
};

export function GroupContent(props: any) {
  useInjectReducer({
    key: sliceKey,
    reducer: reducer,
  });
  useInjectSaga({ key: sliceKey, saga: addOrEditGroupModalSaga });

  const dispatch = useDispatch();

  const listGroups = [
    {
      id: 1,
      name: 'Developer',
      access: ['TruongNP', 'HienNT'],
      status: 'ACTIVE',
    },
    {
      id: 2,
      name: 'Human Resources',
      access: ['NganNS', 'LinhD'],
      status: 'ACTIVE',
    },
    {
      id: 3,
      name: 'Marketing',
      access: ['DuongLAT'],
      status: 'ACTIVE',
    },
  ];

  const listActions = [
    {
      id: 1,
      name: 'Edit',
    },
    {
      id: 2,
      name: 'Delete',
    },
    {
      id: 3,
      name: 'Inactive',
    },
  ];

  const data = useMemo(
    () =>
      listGroups?.map(item => {
        return {
          name: (
            <P color="dimGray" className="mb-0">
              {item.name}
            </P>
          ),
          access: (
            <P className="mb-0">
              {item.access.map(member => {
                return (
                  <Span
                    key={member}
                    color="primaryGreen"
                    bg="primaryGreenTransparent"
                    className="d-inline-block px-2 py-1 me-1 mb-1"
                  >
                    {member}
                  </Span>
                );
              })}
            </P>
          ),
          status: (
            <Span
              color={item.status === 'ACTIVE' ? 'primaryGreen' : 'dimGray'}
              fontWeight="medium"
              className="mb-0 px-2 py-1"
            >
              {item.status}
            </Span>
          ),
          actions: (
            <DropDownWrapper
              id="actions"
              background="transparent"
              color="primaryWhite"
              icon={
                <IconWrapper
                  size="small"
                  icon={InputDotMenu}
                  fill="primaryWhite"
                />
              }
            >
              <Flex py="m" px="l" flexDirection="column" width="250px">
                <Flex flexDirection="column">
                  {listActions.map((action: any) => (
                    <Span
                      key={action.id}
                      className="cursor-pointer"
                      onClick={() => {}}
                    >
                      {action.name}
                    </Span>
                  ))}
                </Flex>
              </Flex>
            </DropDownWrapper>
          ),
        };
      }),
    [],
  );

  return (
    <Box mt="xl">
      <HeaderContentWrapper className="mb-2">
        <Button
          variant="primary"
          mt="m"
          onClick={() => {
            dispatch(actions.setEventClickButton({ showModal: true }));
          }}
        >
          {'Add New Group'}
        </Button>
      </HeaderContentWrapper>
      <CustomTableOnTabs
        listItemTable={listGroups}
        table={tableInfo}
        data={data}
      />
      <AddOrEditGroupModal />
    </Box>
  );
}

const HeaderContentWrapper = styled(Flex)<any>`
  width: 100%;
  align-items: end;
  justify-content: space-between;
`;
