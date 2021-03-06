This package offers a nested editable menu with different levels of nesting and customization. Give a star on github if you like the package.

## Demo

https://react-demo-menu.herokuapp.com/

## Features

- Based on Hooks
- Responsive
- Easy to implement
- Custom titles
- Validation
- Custom Currencies
- Customization
- Different levels of nesting
- Basic initial input
- Read and edit mode
- Classes For customization
- Draggable(to be implemented)

## Installation

Npm
`$ npm install react-editable-nested-menu`

Yarn
`$ yarn add react-editable-nested-menu`

## Props

| Props                        | Available         | Default                  |
| ---------------------------- | ----------------- | ------------------------ |
| defaultMode                  | `'read' | 'edit'` | `read`                   |
| defaultList                  | `array`           | `[]`                     |
| title                        | `string`          | `'Nested Editable Tree'` |
| currency                     | `string`          | `'Rs'`                   |
| firstLevelTitleColor         | `string`          | `'black'`                |
| secondLevelTitleColor        | `string`          | `'grey'`                 |
| thirdLevelTitleColor         | `string`          | `'grey'`                 |
| firstLevelTitle              | `string`          | `'Menu'`                 |
| secondLevelTitle             | `string`          | `'Category'`             |
| thirdLevelTitle              | `string`          | `'Item'`                 |
| levels                       | `2-3`             | `'3'`                    |
| secondLevelShouldHaveDetails | `boolean`         | `'false'`                |
| logo                         | `string`          | `null`                   |


## Basic Usage

    import  NestedEditableTree  from  'react-editable-nested-menu';
    
        <NestedEditableTree
        getValueOnSave={list  => {
        console.log(list);
        }}
        />


## Screenshots

### Read Mode:

#### Two Level
  ![Two Level Read](https://i.ibb.co/SR2zkbd/2.png)
#### Three Level
  ![Three Level Read](https://i.ibb.co/G24dY0S/3.png)

### Edit Mode:

#### Two Level
  ![Two Level Edit](https://i.ibb.co/khk4hDk/2-e.png)
#### Three Level
  ![Three Level Edit](https://i.ibb.co/G24dY0S/3.png)

## Keywords

[react](https://www.npmjs.com/search?q=keywords:react) | [react-menu](https://www.npmjs.com/search?q=keywords:react-menu) | [nested-editable-menu](https://www.npmjs.com/search?q=react-nested-editable-menu) | [react-nested-editable-menu](https://www.npmjs.com/search?q=react-nested-editable-menu)
