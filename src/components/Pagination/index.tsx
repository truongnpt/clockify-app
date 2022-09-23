import { Pagination as PaginationBoostrap } from 'react-bootstrap';
import styled from '@emotion/styled';
import { Flex, Span, Box } from 'components';
import React, { ReactElement, Fragment } from 'react';
import { FormSelectNormal } from '../Form/FormCustomSelect';

interface Props {
  meta: any;
  links: any;
  pageSize: number;
  tableName: string;
}

function PaginationShort(props: Props) {
  const { meta, links, tableName } = props;
  const { current_page, last_page, total } = meta;
  const from = meta.from ?? 0;
  const to = meta.to ?? 0;
  const limitToHidePaginationNumber = 10;

  const handleChangePage = number => {};

  const PageItem = ({ number }) => {
    return (
      <PaginationItem
        onClick={() => handleChangePage(number)}
        active={number === current_page}
      >
        {number}
      </PaginationItem>
    );
  };

  const renderPagination = () => {
    const htmlPagination: ReactElement[] = [];

    if (last_page <= 6) {
      //render
      for (let number = 1; number <= last_page; number++) {
        htmlPagination.push(<PageItem number={number} key={number} />);
      }
      return htmlPagination;
    } else {
      const begin = [1, 2, 3];
      const end = [last_page, last_page - 1, last_page - 2];

      if (begin.includes(current_page)) {
        //render 1, 2, 3, 4, 5...10
        for (let number = 1; number <= begin.length + 2; number++) {
          htmlPagination.push(<PageItem number={number} key={number} />);
        }
        return (
          <Fragment>
            {htmlPagination}
            <PaginationEllipsis />
            <PageItem number={last_page} />
          </Fragment>
        );
      }

      if (end.includes(current_page)) {
        for (
          let number = last_page - end.length - 1;
          number <= last_page;
          number++
        ) {
          htmlPagination.push(<PageItem number={number} key={number} />);
        }
        return (
          <Fragment>
            <PageItem number={1} />
            <PaginationEllipsis />
            {htmlPagination}
          </Fragment>
        );
      }

      //If number active between 5 and 10
      return (
        <Fragment>
          <PageItem number={1} />
          {current_page - 3 !== 1 && <PaginationEllipsis />}
          <PageItem number={current_page - 2} />
          <PageItem number={current_page - 1} />
          <PageItem number={current_page} />
          <PageItem number={current_page + 1} />
          <PageItem number={current_page + 2} />
          {current_page + 3 !== last_page && <PaginationEllipsis />}
          <PageItem number={last_page} />
        </Fragment>
      );
    }
  };

  const dataPageSize = [
    {
      value: 10,
      label: 'Show 10',
    },
    {
      value: 20,
      label: 'Show 20',
    },
    {
      value: 50,
      label: 'Show 50',
    },
    {
      value: 100,
      label: 'Show 100',
    },
  ];

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      border="1px solid"
      borderColor="northeastSnow"
      pl="l"
      pr="2rem"
      minHeight="50px"
    >
      {meta.total > limitToHidePaginationNumber ? (
        <Fragment>
          {meta.last_page > 1 ? (
            <Pagination>
              <PaginationPrev
                onClick={() => handleChangePage(meta.current_page - 1)}
                disabled={!links.prev}
              />
              {renderPagination()}
              <PaginationNext
                onClick={() => handleChangePage(meta.current_page + 1)}
                disabled={!links.next}
              />
            </Pagination>
          ) : (
            <Box minWidth="100px" />
          )}
          <WrapperFormSelectPageSize>
            <FormSelectNormal
              name="page_size"
              id="page_size"
              select
              options={dataPageSize}
              value={dataPageSize.find(item => item.value === 1)}
              onChange={data => {}}
              isSearchable={false}
            />
          </WrapperFormSelectPageSize>
        </Fragment>
      ) : (
        <div />
      )}
      {total < 1 ? (
        <Span variant="body">{'No items'}</Span>
      ) : (
        <Span>{`${from} - ${to} out ${total} items`}</Span>
      )}
    </Flex>
  );
}

const Pagination = styled(PaginationBoostrap)<any>`
  padding-top: 0.35rem;
  align-items: center;
  padding: auto;
  .page-link {
    color: ${props => props.theme.colors.dimGray};
    font-weight: ${props => props.theme.fontWeights.regular};
    font-size: ${props => props.theme.fontSizes.small};
    font-family: ${props => props.theme.fonts.secondary};
    background: ${props => props.theme.colors.white};
    padding: ${props => props.theme.space.s};
    border: none;
  }

  .page-item.active .page-link {
    color: ${props => props.theme.colors.primaryBlack};
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.small};
    background: ${props => props.theme.colors.white};
  }

  .page-item:focus {
    border: none;
  }

  .page-link:focus {
    z-index: 3;
    outline: 0;
    box-shadow: none;
  }

  .page-item.disabled .page-link {
    color: ${props => props.theme.colors.silver};
  }

  span[aria-hidden='true'] {
    font-size: ${props => props.theme.fontSizes.h5};
  }
`;

const PaginationPrev = PaginationBoostrap.Prev;
const PaginationItem = PaginationBoostrap.Item;
const PaginationEllipsis = PaginationBoostrap.Ellipsis;
const PaginationNext = PaginationBoostrap.Next;

const WrapperFormSelectPageSize = styled.div<any>`
  .react-select__control {
    min-width: 6.5rem;
    width: 100%;
    border: none;
    font-size: ${p => p.theme.fontSizes.small};
    .react-select__value-container {
      width: auto;
      .react-select__single-value {
        max-width: fit-content;
        margin-top: 18px;
        position: relative;
      }
    }
  }
  .react-select__indicator {
    padding-left: 0;
  }
  .react-select__control--is-focused,
  .react-select__control--is-focused:hover {
    border: none !important;
  }
`;

export {
  Pagination,
  PaginationPrev,
  PaginationItem,
  PaginationEllipsis,
  PaginationNext,
  PaginationShort,
};
