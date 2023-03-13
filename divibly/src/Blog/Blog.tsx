import { List, Avatar, Button, Modal } from 'antd'
import { Post } from '../Interface/DataPost';
import { useState, useEffect } from 'react'
import { deleteBlog, getBlog } from '../API/CRUD';
import './Blog.css'
import { useNavigate } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons'
import { useRecoilState } from 'recoil'
import { postAtom } from '../Recoil/atom';

function Blog() {

  const [data, setData] = useRecoilState(postAtom)

  // const [data, setData] = useState<Post[]>([])
  useEffect(() => {
    getBlog().then(res => setData(res))
  }, [])

  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false)

  function onClick(id: String) {

    navigate("/content/" + id)
  }

  function handleOk(id: string) {
    deleteBlog(id).then(res => console.log(res.status))
    if (data !== undefined) {
      const dataTemp: Post[] = [...data];
      for (let i = 0; i < dataTemp.length; i++) {
        if (dataTemp[i].id === id) {
          dataTemp.splice(i, 1)
        }
      }
      setData(dataTemp)
    }
    setIsModalOpen(false)
  }

  function handleCancel() {
    setIsModalOpen(false)
  }

  return (
    <div className='blog-container'>
      <List
        itemLayout='horizontal'
        dataSource={data}
        renderItem={(item: Post) => (
          <>
            <List.Item
              actions={[
                <Button onClick={() => onClick(item.id)}>More</Button>,
                <Button type='primary' onClick={() => navigate('/edit/' + item.id)}>Edit</Button>,
                <Button danger onClick={() => setIsModalOpen(true)}>Delete</Button>
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={'https://joesch.moe/api/v1/random?key=1'} />}
                title={item.title}
                description={item.description}
              />
            </List.Item>

            <Modal maskStyle={{ backgroundColor: '#00000033' }} title="Confirmation" open={isModalOpen} onCancel={handleCancel} onOk={() => handleOk(item.id)}>
              <p>Are you sure you want to delete this post?</p>
            </Modal>
          </>


        )}
      />

      <Button className='add-button' icon={<PlusOutlined />} shape='circle' size='large' onClick={() => navigate('/new')} />
    </div>
  )
}

export default Blog