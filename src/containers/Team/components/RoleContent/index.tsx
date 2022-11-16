/**
 *
 * RoleContent
 *
 */

import React, { useMemo } from 'react';
import { Box, Button, DropDownWrapper, Flex, IconWrapper, P } from 'components';
import { Span } from 'components';
import styled from '@emotion/styled';
import { InputDotMenu } from 'components/IconWrapper/Global';
import { CustomTableOnTabs } from 'components/TableContainer/components/CustomTableOnTabs';
import { actions, sliceKey, reducer } from '../AddOrEditRoleModal/slice';
import { addOrEditRoleModalSaga } from '../AddOrEditRoleModal/saga';
import { useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { AddOrEditRoleModal } from '../AddOrEditRoleModal';

export const tableInfo = {
  tableName: 'roles',
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
      id: 'total_member',
      value: 'total_member',
      checked: true,
      label: 'Total Member',
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

export function RoleContent(props: any) {
  useInjectReducer({
    key: sliceKey,
    reducer: reducer,
  });
  useInjectSaga({ key: sliceKey, saga: addOrEditRoleModalSaga });

  const dispatch = useDispatch();

  const listRoles = [
    {
      id: 1,
      name: 'Developer',
      total_member: 20,
      status: 'ACTIVE',
    },
    {
      id: 2,
      name: 'Human Resources',
      total_member: 3,
      status: 'ACTIVE',
    },
    {
      id: 3,
      name: 'Marketing',
      total_member: 2,
      status: 'ACTIVE',
    },
    {
      id: 4,
      name: 'Fresher',
      total_member: 5,
      status: 'ACTIVE',
    },
    {
      id: 5,
      name: 'Midle',
      total_member: 4,
      status: 'ACTIVE',
    },
    {
      id: 6,
      name: 'Senior',
      total_member: 6,
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
      listRoles?.map(item => {
        return {
          name: (
            <P color="dimGray" className="mb-0">
              {item.name}
            </P>
          ),
          total_member: (
            <TotalMember
              color="dimGray"
              bg="primaryGreenTransparent"
              className="mb-0 rounded-circle"
            >
              {item.total_member}
            </TotalMember>
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
          {'Add New Role'}
        </Button>
      </HeaderContentWrapper>
      <CustomTableOnTabs
        listItemTable={listRoles}
        table={tableInfo}
        data={data}
      />
      <AddOrEditRoleModal />
    </Box>
  );
}

const HeaderContentWrapper = styled(Flex)<any>`
  width: 100%;
  align-items: end;
  justify-content: space-between;
`;

const TotalMember = styled(Span)<any>`
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
`;
