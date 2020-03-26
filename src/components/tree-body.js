import React from 'react';
import { Button, CardBody, Col, Input, Row } from 'reactstrap';
import Menu from './menu';

function TreeBody({
  list,
  setList,
  mode,
  currency,
  levels,
  firstLevelTitleColor,
  secondLevelTitleColor,
  thirdLevelTitleColor,
  firstLevelTitle,
  secondLevelTitle,
  thirdLevelTitle,
  secondLevelShouldHaveDetails
}) {
  function handleMenuChange(event, menuIndex) {
    const fetchedlist = [...list];
    fetchedlist[menuIndex].name = event.target.value;
    setList(fetchedlist);
  }

  function removeMenu(menuIndex) {
    const fetchedlist = [...list];
    fetchedlist.splice(menuIndex, 1);
    setList(fetchedlist);
  }

  function handleCategoryChange(event, menuIndex, categoryIndex) {
    const fetchedlist = [...list];
    fetchedlist[menuIndex].categories[categoryIndex][event.target.name] =
      event.target.value;
    setList(fetchedlist);
  }

  function removeCategory(menuIndex, categoryIndex) {
    const fetchedlist = [...list];
    fetchedlist[menuIndex].categories.splice(categoryIndex, 1);
    setList(fetchedlist);
  }

  function handleItemChange(event, menuIndex, categoryIndex, itemIndex) {
    const fetchedlist = [...list];
    fetchedlist[menuIndex].categories[categoryIndex].items[itemIndex][
      event.target.name
    ] = event.target.value;
    setList(fetchedlist);
  }

  function addItem(menuId, categoryId) {
    const fetchedlist = [...list];
    let item = {
      name: '',
      description: '',
      price: ''
    };
    fetchedlist[menuId].categories[categoryId].items.push(item);
    setList(fetchedlist);
  }

  function removeItem(menuIndex, categoryIndex, index) {
    const fetchedlist = [...list];
    fetchedlist[menuIndex].categories[categoryIndex].items.splice(index, 1);
    setList(fetchedlist);
  }

  function addMenu() {
    const fetchedlist = [...list];
    let menu = {
      name: '',
      categories: []
    };
    fetchedlist.push(menu);
    setList(fetchedlist);
  }

  function addCategory(menuId) {
    const fetchedlist = [...list];
    let category = {
      name: '',
      price: '',
      description: '',
      items: []
    };
    if (levels === 2) {
      delete category.items;
    }
    if (!secondLevelShouldHaveDetails) {
      delete category.description;
      delete category.price;
    }
    fetchedlist[menuId].categories.push(category);
    setList(fetchedlist);
  }

  function handleKeyDown(e) {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  return (
    <CardBody>
      {list.length === 0
        ? mode === 'read' && <p>Add a menu</p>
        : list.map((menu, menuIndex) => {
            return (
              <div className="first__level__list__style" key={menuIndex}>
                <Row
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '5px 0px'
                  }}
                >
                  <Col xs="8" md="4">
                    <Input
                      autoComplete="off"
                      disabled={mode === 'read' ? true : false}
                      style={
                        mode === 'read'
                          ? {
                              color: firstLevelTitleColor,
                              ...styles.menuReadStyle
                            }
                          : { margin: 10 }
                      }
                      onChange={event => handleMenuChange(event, menuIndex)}
                      value={menu.name}
                      placeholder={firstLevelTitle + ' Title'}
                    />
                  </Col>
                  {mode === 'edit' && (
                    <Col xs="4" md="2">
                      <i
                        className="fa fa-minus"
                        style={{ float: 'right', color: 'red' }}
                        onClick={() => {
                          removeMenu(menuIndex);
                        }}
                      ></i>
                    </Col>
                  )}
                </Row>
                {menu.categories.map((category, categoryIndex) => {
                  return (
                    <Menu
                      key={categoryIndex}
                      levels={levels}
                      category={category}
                      currency={currency}
                      mode={mode}
                      menuIndex={menuIndex}
                      categoryIndex={categoryIndex}
                      handleItemChange={handleItemChange}
                      removeItem={removeItem}
                      handleKeyDown={handleKeyDown}
                      secondLevelTitleColor={secondLevelTitleColor}
                      thirdLevelTitleColor={thirdLevelTitleColor}
                      handleCategoryChange={handleCategoryChange}
                      removeCategory={removeCategory}
                      addItem={addItem}
                      secondLevelTitle={secondLevelTitle}
                      thirdLevelTitle={thirdLevelTitle}
                      secondLevelShouldHaveDetails={
                        secondLevelShouldHaveDetails
                      }
                    />
                  );
                })}
                {mode === 'edit' && (
                  <Row
                    style={{ padding: '10px 20px', justifyContent: 'flex-end' }}
                  >
                    <Button
                      color="primary"
                      onClick={() => addCategory(menuIndex)}
                      disabled={!menu.name}
                    >
                      Add {secondLevelTitle}
                    </Button>
                  </Row>
                )}
              </div>
            );
          })}
      {mode === 'edit' && (
        <Row style={{ padding: '10px 20px', justifyContent: 'flex-end' }}>
          <Button color="primary" onClick={addMenu}>
            Add {firstLevelTitle}
          </Button>
        </Row>
      )}
    </CardBody>
  );
}

const styles = {
  menuReadStyle: {
    background: 'transparent',
    fontSize: 22,
    border: 'none',
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 0
  }
};

export default TreeBody;
