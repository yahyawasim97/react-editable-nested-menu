import 'bootstrap/dist/css/bootstrap.min.css';
import './components/nested-editable-tree.css';
import React, { useState } from 'react';
import { Card } from 'reactstrap';
import Header from './components/header';
import TreeBody from './components/tree-body';

NestedEditableTree.defaultProps = {
  defaultMode: 'read',
  defaultList: [],
  title: 'Nested Editable Tree',
  showTitle: true,
  currency: 'Rs',
  firstLevelTitleColor: 'black',
  secondLevelTitleColor: 'grey',
  thirdLevelTitleColor: 'grey',
  firstLevelTitle: 'Menu',
  secondLevelTitle: 'Category',
  thirdLevelTitle: 'Item',
  levels: 3,
  secondLevelShouldHaveDetails: false
};

function NestedEditableTree({
  defaultMode,
  defaultList,
  title,
  showTitle,
  getValueOnSave,
  logo,
  currency,
  firstLevelTitleColor,
  secondLevelTitleColor,
  thirdLevelTitleColor,
  firstLevelTitle,
  secondLevelTitle,
  thirdLevelTitle,
  levels,
  secondLevelShouldHaveDetails
}) {
  const [mode, setMode] = useState(defaultMode);
  const [list, setList] = useState(defaultList);

  function handleButtonClick() {
    if (mode === 'read') {
      setMode('edit');
    } else {
      setMode('read');
      let alteredList = [...list];
      if (levels === 2) {
        alteredList = alteredList.map(l => ({
          name: l.name,
          [secondLevelTitle]: l.categories
        }));
      } else {
        alteredList = alteredList.map(l => ({
          name: l.name,
          [secondLevelTitle.toLowerCase()]: l.categories.map(c => ({
            name: c.name,
            [thirdLevelTitle.toLowerCase()]: c.items
          }))
        }));
      }
      getValueOnSave(alteredList);
    }
  }

  function handleCancelButton() {
    if (mode === 'edit') {
      setMode('read');
      setList(defaultList);
    }
  }

  return (
    <div>
      <Card>
        <Header
          mode={mode}
          saveState={setMode}
          showTitle={showTitle}
          title={title}
          logo={logo}
          handleButtonClick={handleButtonClick}
          handleCancelButton={handleCancelButton}
        />
        <TreeBody
          list={list}
          mode={mode}
          setList={setList}
          currency={currency}
          firstLevelTitleColor={firstLevelTitleColor}
          secondLevelTitleColor={secondLevelTitleColor}
          thirdLevelTitleColor={thirdLevelTitleColor}
          firstLevelTitle={firstLevelTitle}
          secondLevelTitle={secondLevelTitle}
          thirdLevelTitle={thirdLevelTitle}
          levels={levels}
          secondLevelShouldHaveDetails={secondLevelShouldHaveDetails}
        />
      </Card>
    </div>
  );
}

export default NestedEditableTree;
