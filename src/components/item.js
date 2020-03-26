import React from 'react';
import { Row, Col, Input } from 'reactstrap';

function Item({
  mode,
  item,
  index,
  lastIndex,
  menuIndex,
  categoryIndex,
  handleItemChange,
  handleKeyDown,
  removeItem,
  currency,
  thirdLevelTitleColor
}) {
  return (
    <Row
      className="menu__row__style"
      style={{
        borderBottom: lastIndex === index ? 'none' : '1px solid lightgrey'
      }}
      key={index}
    >
      <Col xs="7" md="3" style={{ margin: '5px 0px' }}>
        {mode === 'read' ? (
          <p className="item__name__style">
            <span className="mr-2">{index + 1}.</span>
            {item.name}
          </p>
        ) : (
          <Input
            autoComplete="off"
            disabled={mode === 'read' ? true : false}
            style={
              mode === 'read'
                ? { color: thirdLevelTitleColor, ...styles.itemEditStyle }
                : { margin: '10px 0px' }
            }
            value={item.name}
            onChange={event =>
              handleItemChange(event, menuIndex, categoryIndex, index)
            }
            name="name"
            placeholder="Name"
          />
        )}
      </Col>
      <Col xs="5" md="3" style={{ margin: '5px 0px', paddingRight: 0 }}>
        <Input
          autoComplete="off"
          disabled={mode === 'read' ? true : false}
          style={mode === 'read' ? styles.itemEditStyle : null}
          value={mode === 'read' ? `${currency}. ${item.price}` : item.price}
          onChange={event =>
            handleItemChange(event, menuIndex, categoryIndex, index)
          }
          name="price"
          placeholder="Price"
          type={mode === 'edit' ? 'number' : 'text'}
        />
      </Col>
      <Col
        xs="12"
        md={mode === 'read' ? '6' : '4'}
        style={{ margin: '5px 0px' }}
      >
        {mode === 'read' ? (
          <p style={{ padding: 5, margin: 0 }}>
            {item.description ? item.description : 'No description found'}
          </p>
        ) : (
          <Input
            autoComplete="off"
            disabled={mode === 'read' ? true : false}
            style={
              mode === 'read' ? styles.itemEditStyle : { margin: '10px 0px' }
            }
            type="textarea"
            onKeyDown={handleKeyDown}
            value={item.description ? item.description : ''}
            rows={1}
            placeholder="No Description Found"
            onChange={event =>
              handleItemChange(event, menuIndex, categoryIndex, index)
            }
            name="description"
          />
        )}
      </Col>
      {mode === 'edit' && (
        <Col xs="12" md="2" style={{ margin: '5px 0px' }}>
          <i
            className="fa fa-minus"
            style={{ float: 'right', color: 'red' }}
            onClick={() => removeItem(menuIndex, categoryIndex, index)}
          ></i>
        </Col>
      )}
    </Row>
  );
}

const styles = {
  itemEditStyle: {
    background: 'transparent',
    border: 'none',
    padding: 5,
    resize: 'none',
    fontWeight: '500'
  }
};

export default Item;
