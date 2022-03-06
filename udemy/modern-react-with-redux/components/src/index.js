import faker from '@faker-js/faker';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author={faker.name.firstName()} text={faker.lorem.sentence()} />
      <CommentDetail author={faker.name.firstName()} text={faker.lorem.sentence()} />
      <CommentDetail author={faker.name.firstName()} text={faker.lorem.sentence()} />
      <CommentDetail author={faker.name.firstName()} text={faker.lorem.sentence()} />
      <CommentDetail author={faker.name.firstName()} text={faker.lorem.sentence()} />
      <CommentDetail author={faker.name.firstName()} text={faker.lorem.sentence()} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
