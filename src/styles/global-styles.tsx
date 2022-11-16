import React from 'react';
import { Global, css } from '@emotion/core';
import theme from './theme';

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          font-family: DM Sans, Helvetica, Arial, sans-serif;
          height: 100%;
          width: 100%;
          font-size: 14px;
          margin: 0;
          padding: 0;
        }

        body {
          overflow-y: scroll;
        }

        * {
          margin: 0;
          padding: 0;
        }

        #root {
          min-height: 100%;
          min-width: 100%;
        }

        p {
          font-family: DM Sans, Helvetica, Arial, sans-serif;
          font-size: 14px;
        }

        input,
        select {
          font-family: inherit;
          font-size: inherit;
          outline: none !important;
          box-shadow: none !important;
          border-color: #ced4da !important;
        }

        a,
        a:hover {
          text-decoration: none;
          color: #000;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        hr {
          margin: 0;
          padding: 0;
        }

        ul {
          margin-bottom: 0.5rem;
        }

        img {
          display: block;
          width: 100%;
        }

        /* tooltip */
        .tooltip-container {
          z-index: 999;
        }

        .custom-tooltip {
          background: #ffffff;
          width: 320px !important;
          padding: 20px;
          border: 1px solid #f5f6f8;
          box-sizing: border-box;
          box-shadow: 0px 0px 10px 2px rgba(21, 21, 21, 0.08);
          border-radius: 5px;
          opacity: 1;
          z-index: 999;
        }

        .custom-tooltip .tooltip-inner {
          margin-top: 5px;
          max-width: 100%;
          padding: 0;
          color: #000;
          text-align: left;
          background-color: #fff;
          border-radius: 0;
        }

        .event-monthly:before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${theme.colors.middleBlue};
          margin-right: 10px;
          padding: 4px;
        }

        .event-monthly-rtl:before {
          margin-left: 10px;
          margin-right: 0;
        }

        .event-monthly.publish:before {
          background: ${theme.colors.Mustard};
        }

        .event-monthly.no-employee:before {
          background: ${theme.colors.azure};
        }

        .modal-center {
          &.first-modal-layer {
            z-index: 9999;
          }
          &.fade .modal-dialog {
            transform: translate(-50%, calc(-50% - 50px));
          }
          &.show .modal-dialog {
            transform: translate(-50%, -50%);
          }

          .modal-dialog {
            position: absolute;
            float: left;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            margin: 0;
          }
        }
        .custom__scollbar {
          ::-webkit-scrollbar {
            width: ${theme.space.s};
          }

          ::-webkit-scrollbar-thumb {
            border-radius: ${theme.space.s};
            background-color: ${theme.colors.cadetGray};
          }

          ::-webkit-scrollbar-track {
            background: transparent;
          }
        }
      `}
    />
  );
};
