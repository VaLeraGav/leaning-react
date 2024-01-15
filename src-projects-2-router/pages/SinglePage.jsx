import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const SinglePage = () => {
  const { id } = useParams(); // возвращает параметры
  const navigate = useNavigate(); // возвращает
  const [post, setPost] = useState(null);

  // const goBack = () => navigate('/posts/1', {state: 123});
  // console.log(useLocation())
  // hash: ""
  // key: "fmn8lfxd"
  // pathname: "/posts/1"
  // search: ""
  // state: 123

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', { replace: true }); // replace - переадресация, не нужно записывать в историю

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      {/*
        Плохой подход
        использовать <Link>
        navigate - использовать в функции
      */}
      <button onClick={goHome}>Go home</button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
};

export default SinglePage;
