import React, { Component } from 'react';
import logo from './logo.svg';
import './Blog.css';


class Blog extends Component {

    render() {
        const sidebar = (
            <ul>
                {this.props.posts.map((post) =>
                    <li key={post.id}>
                        {post.title}
                    </li>
                )}
            </ul>
        );
        const content = this.props.posts.map((post) =>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        );

        return (
            <div>
                {sidebar}
                <hr/>
                {content}
            </div>
        );
    }
}

export default Blog;