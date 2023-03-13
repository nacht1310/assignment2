import './Content.css'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Post } from '../Interface/DataPost'
import { getBlogById } from '../API/CRUD'

function Content() {
  const { contentId } = useParams()
  const [data, setData] = useState<Post>()
  useEffect(() => {
    if (contentId !== undefined) {
      getBlogById(contentId).then(res => setData(res))
    }
  }, [contentId])
  return (
    <div className='content-container'>
      <div className='content'>
        <h1>{data?.title}</h1>
        <div>{data?.date}</div>
        <p>{data?.content}</p>
        <Link className='button' to='/' >Home</Link>
      </div>
    </div>
  )
}

export default Content