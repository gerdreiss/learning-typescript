import faker from '@faker-js/faker';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.name.firstName()}
        time="Today at 1:45PM"
        text={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        time="Today at 2:15PM"
        text={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        time="Today at 3:05PM"
        text={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        time="Yesterday at 3:40PM"
        text={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        time="Last week Friday at 1:45PM"
        text={faker.lorem.sentence()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        time="Today at 4:15PM"
        text={faker.lorem.sentence()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
