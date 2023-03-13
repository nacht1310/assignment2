import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getBlogById, updateBlog } from '../API/CRUD'
import { Post } from '../Interface/DataPost'
import { Form, Button, Input } from 'antd'
import './Edit.css'
import { useNavigate } from 'react-router-dom'

function Edit() {
  const { contentId } = useParams()
  const [data, setData] = useState<Post>()
  useEffect(() => {
    if (contentId !== undefined) {
      getBlogById(contentId).then(res => setData(res))
    }
  }, [contentId])

  const navigate = useNavigate()

  const labelCol = { span: 5 }
  const initialValues =
    [
      {
        name: 'title',
        value: data?.title
      },
      {
        name: 'description',
        value: data?.description
      },
      {
        name: 'content',
        value: data?.content
      }
    ]

  function onSubmit(values: any) {

    console.log("Submit")
    
    if(data !== undefined) {
      const dataTemp: Post = {...data}
        dataTemp.title = values.title
        dataTemp.description = values.description
        dataTemp.content = values.content
        dataTemp.date = new Date().toDateString()
  
        updateBlog(dataTemp).then(res => console.log(res.status))
        setData(dataTemp)
        navigate('/')
    }
    
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
        fields={initialValues}
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

export default Edit