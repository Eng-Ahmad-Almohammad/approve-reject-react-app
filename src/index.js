import React from 'react'
import ReactDom from 'react-dom'
import faker from 'faker'

import CommentDetali from './CommentDetail'
import ArrovalCard from './ApprovalCard'
const App = function () {
    return (
        <div className="ui container comments">
            <ArrovalCard>
                <h4>Warning!</h4>
                Are you sure?
            </ArrovalCard>

            <ArrovalCard>
                <CommentDetali
                    author={faker.name.firstName()}
                    date='Today at 4:45PM'
                    image={faker.image.avatar()}
                    comment={faker.lorem.sentence()}
                />
            </ArrovalCard>

            <ArrovalCard>
                <CommentDetali
                    author={faker.name.firstName()}
                    date='Today at 2:05PM'
                    image={faker.image.avatar()}
                    comment={faker.lorem.sentence()}
                />
            </ArrovalCard>

            <ArrovalCard>
                <CommentDetali
                    author={faker.name.firstName()}
                    date='Today at 6:30PM'
                    image={faker.image.avatar()}
                    comment={faker.lorem.sentence()}
                />
            </ArrovalCard>
        </div>
    )
}

ReactDom.render(<App />, document.getElementById('root'))