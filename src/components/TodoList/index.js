import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Todo from '../Todo';
// import { addTodo } from '../../redux/actions'    redux core
import { todoRemainingSelector } from '../../redux/selectors'

import { todosSlice } from './todoSliceReducer'

export default function TodoList() {
  const [todoForm, setTodoForm] = useState('')
  const [prioriryForm, setPrioriryForm] = useState('Medium')


  const dispatch = useDispatch()

  const todoList = useSelector(todoRemainingSelector)
  // const seachText = useSelector(seachTextSelector)

  const handleOnChangeInput = (event) => {
    setTodoForm(event.target.value)
  }

  const handleOnChangePrioriry = (value) => {
    setPrioriryForm(value)
  }

  const handeAddButtonClick = () => {
    dispatch(todosSlice.actions.addTodo({
      id: uuidv4(),
      name: todoForm,
      prioriry: prioriryForm,
      completed: false,
    }))
    setTodoForm('')
    setPrioriryForm('Medium')
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => <Todo key={todo.id} id={todo.id} name={todo.name} prioriry={todo.prioriry} completed={todo.completed} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input name="name" value={todoForm} onChange={handleOnChangeInput} />
          <Select value={prioriryForm} onChange={handleOnChangePrioriry}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handeAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
