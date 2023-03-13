import { Button, Form, Input } from 'antd'
import { Post, PostClass } from '../Interface/DataPost'
import { v4 as uuidv4 } from 'uuid'
import { postBlog } from '../API/CRUD'
import { useNavigate } from 'react-router-dom'

function Upload() {

  const navigate = useNavigate()

  const labelCol = { span: 5 }
  let myId = uuidv4()
  function onSubmit(values: any) {
    const dataTemp: Post = new PostClass(myId, values.title, values.description, values.content, new Date().toDateString())

    postBlog(dataTemp).then(res => console.log(res.status))
    navigate('/')
  }

  return (
    <div className='form-container'>
      <h1>You can edit your post here</h1>
      <Form
        onFinish={onSubmit}
        layout='horizontal'
        style={{ width: 600 }}
        labelCol={labelCol}
        labelAlign='left'
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{
            required: true,
            message: "Title of post is required"
          }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="content"
          label="Content">
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Upload