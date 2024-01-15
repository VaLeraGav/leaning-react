import { useEffect, useState, useCallback } from 'react';
import { useInput } from '../hooks/useInput';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import VirtualScroll from './VirtualScroll';
import ModelDiv from './Modal/ModelDiv';

export default function EffectSection() {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [modalDiv, setModalDiv] = useState(false);
  const [loading, setLoading] = useState(true);
  const [comments, setComment] = useState([]);

  const fetchComment = useCallback(async () => {
    setLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await response.json();
    setComment(comments);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchComment();
  }, [fetchComment]);

  return (
    <section>
      <h3>Effects</h3>

      <Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>
        Открыть модальное окно &lt;dialog&gt;
      </Button>

      <Button style={{ marginBottom: '1rem' }} onClick={() => setModalDiv(true)}>
        Открыть модальное окно &lt;div&gt;
      </Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <form style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Ваше имя</label>
          <input type="text" id="name" className="control" />
        </form>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>

      <ModelDiv
        isOpened={modalDiv}
        onClose={useCallback(() => setModalDiv(false))}
      >
        <h3>Hello from modal</h3>
        <form style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Ваше имя</label>
          <input type="text" id="name" className="control" />
        </form>
        <Button onClick={() => setModalDiv(false)}>Close modal</Button>
      </ModelDiv>

      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          {/* type="text" className="control" value={input.value} onChange={(event) => setValue(event.target.value)} */}
          <input type="text" className="control" {...input} />
          <VirtualScroll
            data={comments.filter((comment) => comment.name.toLowerCase().includes(input.value.toLowerCase()))}
            rowHeight={68.3}
            visibleRows={6}
          />
        </>
      )}
    </section>
  );
}
