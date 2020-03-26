import React from 'react';
import { Button, Card, Col, Input, Row } from 'reactstrap';
import Item from './item';

function Menu({
  levels,
  mode,
  menuIndex,
  categoryIndex,
  handleItemChange,
  handleKeyDown,
  removeItem,
  currency,
  secondLevelTitleColor,
  thirdLevelTitleColor,
  category,
  addItem,
  handleCategoryChange,
  removeCategory,
  secondLevelTitle,
  thirdLevelTitle,
  secondLevelShouldHaveDetails
}) {
  return (
    <Card
      style={{
        margin: 10,
        marginBottom: 20,
        padding: '10px 5px',
        background: '#d3d3d329',
        border: 0,
        borderRadius: 10,
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px 0px'
      }}
      key={categoryIndex}
    >
      <Row
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '5px 0px',
          borderBottom: levels > 2 ? '2px solid' : 'none',
          borderColor: '#2e363a'
        }}
      >
        <Col xs="8" md="3">
          <Input
            autoComplete="off"
            disabled={mode === 'read' ? true : false}
            style={
              mode === 'read'
                ? {
                    color: secondLevelTitleColor,
                    ...styles.categoryReadStyle
                  }
                : { margin: '10px 0px' }
            }
            name="name"
            value={category.name}
            onChange={event =>
              handleCategoryChange(event, menuIndex, categoryIndex)
            }
            placeholder={secondLevelTitle + ' Title'}
          />
        </Col>
        {secondLevelShouldHaveDetails && (
          <React.Fragment>
            <Col xs="5" md="3" style={{ margin: '5px 0px', paddingRight: 0 }}>
              <Input
                autoComplete="off"
                disabled={mode === 'read' ? true : false}
                style={mode === 'read' ? styles.itemEditStyle : null}
                value={
                  mode === 'read'
                    ? `${currency}. ${category.price}`
                    : category.price
                }
                onChange={event =>
                  handleCategoryChange(event, menuIndex, categoryIndex)
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
                  {category.description
                    ? category.description
                    : 'No description found'}
                </p>
              ) : (
                <Input
                  autoComplete="off"
                  disabled={mode === 'read' ? true : false}
                  style={
                    mode === 'read'
                      ? styles.itemEditStyle
                      : { margin: '10px 0px' }
                  }
                  type="textarea"
                  onKeyDown={handleKeyDown}
                  value={category.description ? category.description : ''}
                  rows={1}
                  placeholder="No Description Found"
                  onChange={event =>
                    handleCategoryChange(event, menuIndex, categoryIndex)
                  }
                  name="description"
                />
              )}
            </Col>
          </React.Fragment>
        )}
        {mode === 'edit' && (
          <Col xs="4" md="2">
            <i
              className="fa fa-minus"
              style={{ float: 'right', color: 'red' }}
              onClick={() => removeCategory(menuIndex, categoryIndex)}
            ></i>
          </Col>
        )}
      </Row>
      <div>
        {category.items &&
          category.items.map((item, index) => {
            let lastIndex = category.items.length - 1;
            return (
              <Item
                key={index}
                currency={currency}
                mode={mode}
                lastIndex={lastIndex}
                item={item}
                index={index}
                menuIndex={menuIndex}
                categoryIndex={categoryIndex}
                handleItemChange={handleItemChange}
                removeItem={removeItem}
                handleKeyDown={handleKeyDown}
                thirdLevelTitleColor={thirdLevelTitleColor}
              />
            );
          })}
        {levels > 2 && mode === 'edit' && (
          <Row
            style={{
              padding: '10px 20px',
              justifyContent: 'flex-end'
            }}
          >
            <Button
              color="primary"
              onClick={() => {
                addItem(menuIndex, categoryIndex);
              }}
              disabled={!category.name}
            >
              Add {thirdLevelTitle}
            </Button>
          </Row>
        )}
      </div>
    </Card>
  );
}

const styles = {
  categoryReadStyle: {
    background: 'transparent',
    fontSize: 20,
    border: 'none',
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 0
  },
  itemEditStyle: {
    background: 'transparent',
    border: 'none',
    padding: 5,
    resize: 'none',
    fontWeight: '500'
  }
};
export default Menu;
