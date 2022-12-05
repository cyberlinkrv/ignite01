import { Header } from './components/Header';
import { Post } from './Post';
import './global.css';

export function App() {

  return (
    <div>
      <Header />

      <Post
        author="Divino J. Silva"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam corrupti cupiditate repudiandae fugiat consectetur enim nobis rerum commodi optio architecto vitae incidunt eum odit, omnis aliquid vel necessitatibus tempora voluptatibus!"
      />
      <Post
        author="Joaquim Silva"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      />
    </div>
  )
}
