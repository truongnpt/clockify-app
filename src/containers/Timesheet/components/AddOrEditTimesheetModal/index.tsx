/**
 *
 * AddOrEditTimesheetModal
 *
 */

import React, { Dispatch } from 'react';
import { FormikProps, withFormik } from 'formik';
import { ModalWrapper } from '../../../../components/ModalWrapper';
import {
  FormFieldError,
  FormGroup,
  FormLabel,
} from '../../../../components/Form';
import { FormControl } from '../../../../components';
import { Box, Button, Flex, Span } from '../../../../components/Common';
import * as Yup from 'yup';
import { InfoItem, InfoTimesheetEdit } from 'types/timesheet';
import { useSelector } from 'react-redux';
import { selectEditTimesheetModal } from './selectors';
import { actions } from './slice';
import { useDispatch } from 'react-redux';
import { FormSelectNormal } from 'components/Form/FormCustomSelect';
import { setValue } from 'lib/helpers/FormSelectHelper';

interface Props {
  infoTimesheetEdit?: any;
}

interface FormValues {
  title: string;
  id: number;
}

interface AddOrEditTimesheetInnerFormProps {
  dispatch: Dispatch<any>;
  infoTimesheetEdit?: InfoItem<InfoTimesheetEdit> | null;
}

// modal form upload file
function AddOrEditTimesheetInnerForm(props: FormikProps<FormValues> & any) {
  const { showModal } = useSelector(
    selectEditTimesheetModal,
  );
  
  const {
    dispatch,
    resetForm,
    handleChange,
    touched,
    values,
    errors,
    handleSubmit,
    dirty,
    isValid,
    setFieldValue,
  } = props;

  const handleCloseModal = () => {
    resetForm();
    dispatch(
      actions.resetFormTimesheet(),
    );
  };

  const listTags = [
    {
      name: 'Web',
      id: 'web',
    },
    {
      name: 'Meeting',
      id: 'meeting',
    }
  ];

  const filterData = () => {
    return listTags.map(item => {
      return {
        label: item.name,
        value: item.id,
      };
    });
  };

  return (
    <ModalWrapper
      title="Add Time"
      visible={showModal}
      handleClose={handleCloseModal}
      width="450px"
      className="modal-center first-modal-layer"
    >
      <form className="mt-3" onSubmit={handleSubmit}>
        <Flex alignItems="center" justifyContent="space-between">
        <FormGroup>
          <FormLabel>{'Project:'}</FormLabel>
          <Span mx="s">{'Qualee'}</Span>
        </FormGroup>
        <FormGroup>
        <FormLabel>{'Date'}</FormLabel>
          <Span mx="s">{'24/09/2022'}</Span>
        </FormGroup>
        </Flex>
        <FormGroup>
          <FormLabel>{'Time'}</FormLabel>
          <Flex alignItems="center">
            <FormControl
              width="100px"
              type="text"
              mb="0"
              mr="xl"
              name="title"
              id="title"
              onChange={handleChange}
              value={values.title}
            />
            <Flex alignItems="center" ml="xl">
              <FormControl
                type="text"
                mb="0"
                mr="s"
                name="title"
                id="title"
                onChange={handleChange}
                value={values.title}
              />
              <Span color="dimGray">{'-'}</Span>
              <FormControl
                type="text"
                mb="0"
                ml="s"
                name="title"
                id="title"
                onChange={handleChange}
                value={values.title}
              />
            </Flex>
          </Flex>
          {touched.title && errors.title && <FormFieldError name="title" />}
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="title">{'Title'}</FormLabel>
          <FormControl
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={values.title}
          />
          {touched.title && errors.title && <FormFieldError name="title" />}
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="tages">{'Tags'}</FormLabel>
          <FormSelectNormal
            name="tages"
            onChange={event => {
              setFieldValue('tages', event?.value || 0);
            }}
            width="100%"
            value={setValue(
              listTags,
              values.tages,
              'name',
              'id',
            )}
            placeholder={'Select from list'}
            isClearable={!!values.tages}
            select
            // isDisabled={isEdit}
            options={filterData()}
          />
          {touched.title && errors.title && <FormFieldError name="title" />}
        </FormGroup>
        <Flex justifyContent="end">
          <Button
            variant="secondary"
            mr="s"
            type="button"
            onClick={handleCloseModal}
          >
            {'Cancel'}
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={
              !(
                dirty && !isValid && !errors.title
              )
            }
          >
            {'SAVE'}
          </Button>
        </Flex>
      </form>
    </ModalWrapper>
  );
}
const AddOrEditTimesheetFormik = withFormik<AddOrEditTimesheetInnerFormProps, FormValues>(
  {
    enableReinitialize: true,
    mapPropsToValues: props => ({
      title: props.infoTimesheetEdit?.infoItem.title || '',
      id: props.infoTimesheetEdit?.idItem || 0,
    }),
    validationSchema: Yup.object({
      timeseetTitle: Yup.string().required('Title is required').trim(),
    }),
    handleSubmit: (values, { props }) => {
      console.log(values)
    },
  },
)(AddOrEditTimesheetInnerForm);

export function AddOrEditTimesheetModal(props: Props) {
  const { infoTimesheetEdit } = props;
  const dispatch = useDispatch();

  return (
    <AddOrEditTimesheetFormik
      {...props}
      dispatch={dispatch}
      infoTimesheetEdit={infoTimesheetEdit}
    />
  );
}
