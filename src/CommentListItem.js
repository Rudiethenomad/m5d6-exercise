import React, { Component } from 'react';
import BookList from './BookList';
import BookListItems from './BookListItem'


class CommentListItem extends Component {
    render() {
        return (
           <li>
                {this.props.comment.rate} - {this.props.comment.commment}
           </li>
        );
    }
}

export default CommentListItem;