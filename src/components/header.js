import React from 'react';
import { CardHeader, Button, Row, Col } from 'reactstrap';

function Header({
  showTitle,
  title,
  handleButtonClick,
  mode,
  handleCancelButton,
  logo
}) {
  return (
    <CardHeader>
      <Row className="align-items-center">
        <Col xs="8" md="8" className="text-left">
          <div className="m-1">
            {logo && <img alt="logo" className="logo__style" src={logo} />}
            {showTitle && <span className="title__style">{title}</span>}
          </div>
        </Col>
        <Col
          xs={mode === 'read' ? '4' : '12'}
          md="4"
          className="header__button__style"
        >
          <div className="card-header-actions">
            <Button color="primary" onClick={handleButtonClick}>
              {mode === 'edit' ? 'Save' : 'Edit'}
            </Button>
            {mode === 'edit' && (
              <Button
                color="danger"
                style={{ marginLeft: 10 }}
                onClick={() => handleCancelButton()}
              >
                Cancel
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </CardHeader>
  );
}

export default Header;
