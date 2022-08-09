import React from 'react';
import { Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

const ProfileInput = (props) => {
  return (
    <div>
        <Row className='row-entry'>
        <Col md={4}>
        <label
            htmlFor={props.id}
            className='tw-mb-3 tw-block tw-font-bold tw-text-gray-700'
        >
            {props.label}
        </label>
        </Col>
        <Col className='final-detail'>
        <input
            type={props.type}
            className='final-update tw-w-full tw-appearance-none tw-rounded tw-border tw-py-2 tw-px-3 tw-text-gray-700 tw-shadow focus:tw-border-blue-300 focus:tw-outline-none'
            id={props.id}
            placeholder={props.placeholder}
        />
        </Col>
    </Row>
  </div>
  )
}

export default ProfileInput;