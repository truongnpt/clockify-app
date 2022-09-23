import styled from '@emotion/styled';
import { DropDownWrapper, Flex, Link, Span, Avatar } from 'components';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface DropdownProps {
  infoUser?: any;
}

export function ActionsDropdown(props: DropdownProps) {
  const { infoUser } = props;
  const navigate = useNavigate();

  const accountActions = [
    {
      id: 1,
      name: 'Profile setting',
      path: '/profile-setting',
    },
    {
      id: 2,
      name: 'Download app',
      path: '/app/download',
    },
    {
      id: 3,
      name: 'Try chat app',
      path: '/try-chat-app',
    },
  ];

  const subStringUserName = (name: string) => {
    return name.substring(0, 2);
  };

  const renderTitleUser = () => {
    if (infoUser?.avata && infoUser?.avata != null) {
      return <Avatar size="medium" img={infoUser?.avata} />;
    }

    return <AvataText>{subStringUserName(infoUser?.name)}</AvataText>;
  };

  const handleLogout = () => {
    return navigate('/login');
  };

  return (
    <DropDownWrapper
      id="actions-dropdown"
      background="transparent"
      color="primaryWhite"
      title={renderTitleUser()}
    >
      <Dropdown.Header className="mx-3 mt-3 text-uppercase">
        {infoUser?.name}
      </Dropdown.Header>
      <Dropdown.Header color="dimGray" className="mx-3 mt-2">
        {infoUser?.email}
      </Dropdown.Header>
      <Dropdown.Divider />
      <Flex py="m" px="l" flexDirection="column" width="250px">
        <Flex flexDirection="column">
          {accountActions.map((action: any) => (
            <Link color="dimGray" key={action?.id} to={action?.path}>
              <Span>{action?.name}</Span>
            </Link>
          ))}
          <Dropdown.Divider />
          <Span
            color="dimGray"
            className="cursor-pointer"
            onClick={() => {
              handleLogout();
            }}
          >
            {'Log out'}
          </Span>
        </Flex>
      </Flex>
    </DropDownWrapper>
  );
}

const AvataText = styled(Span)<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.primaryGreen};
  background-color: ${props => props.theme.colors.primaryWhite};
`;
