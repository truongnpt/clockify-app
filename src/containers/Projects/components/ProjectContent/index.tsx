/**
 *
 * ProjectContent
 *
 */

import React, { useMemo, useState } from 'react';
import { Box, Button, DropDownWrapper, Flex, IconWrapper, P } from 'components';
import { Span } from 'components';
import styled from '@emotion/styled';
import { InputDotMenu } from 'components/IconWrapper/Global';
import { CustomTableOnTabs } from 'components/TableContainer/components/CustomTableOnTabs';
import { actions, sliceKey, reducer } from '../AddOrEditProjectModal/slice';
import { addOrEditProjectModalSaga } from '../AddOrEditProjectModal/saga';
import { useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { AddOrEditProjectModal } from '../AddOrEditProjectModal';
import { FormControl, InputGroup } from 'react-bootstrap';

export const tableInfo = {
  tableName: 'projects',
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
      id: 'client',
      value: 'client',
      checked: true,
      label: 'Client',
      isTitleHidden: false,
      isSortDisabled: true,
    },
    {
      id: 'access',
      value: 'access',
      checked: true,
      label: 'Access',
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

export function ProjectContent(props: any) {
  useInjectReducer({
    key: sliceKey,
    reducer: reducer,
  });
  useInjectSaga({ key: sliceKey, saga: addOrEditProjectModalSaga });

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>('');

  const listProjects = [
    {
      id: 1,
      name: 'TVM - Transportme',
      client: 'TransportMe',
      color: '#01cdf1',
      access: 'Private',
      status: 'ACTIVE',
    },
    {
      id: 2,
      name: 'Qualee',
      client: 'Qualee',
      color: '#002b88',
      access: 'Private',
      status: 'ACTIVE',
    },
    {
      id: 3,
      name: 'Training',
      client: 'Faba',
      color: '#eeff00',
      access: 'Public',
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
      listProjects?.map(item => {
        return {
          name: (
            <Flex alignItems="center">
              <ProjectDot bg={item.color} className="me-2" />
              <P color="dimGray" className="mb-0">
                {item.name}
              </P>
            </Flex>
          ),
          client: (
            <P color="dimGray" className="mb-0">
              {item.client}
            </P>
          ),
          access: (
            <P color="dimGray" className="mb-0">
              {item.access}
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
          {'Add New Project'}
        </Button>
        <InputGroupWrapper>
          <FormControl
            id="search"
            type="text"
            placeholder={'Search by name'}
            color="dimGray"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </InputGroupWrapper>
      </HeaderContentWrapper>
      <CustomTableOnTabs
        listItemTable={listProjects}
        table={tableInfo}
        data={data}
      />
      <AddOrEditProjectModal />
    </Box>
  );
}

const HeaderContentWrapper = styled(Flex)<any>`
  width: 100%;
  align-items: end;
  justify-content: space-between;
`;

const InputGroupWrapper = styled(InputGroup)<any>`
  position: relative;
  width: 300px;

  .form-control {
    border-radius: 3px !important;
  }
`;

const ProjectDot = styled(Span)<any>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
`;
