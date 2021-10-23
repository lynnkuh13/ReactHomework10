import React, {Component} from 'react';
import axios from 'axios';

class FetchandAxios extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: [],
                      posts: [] };

        this.getToDos = this.getToDos.bind(this);
        this.getPosts = this.getPosts.bind(this);
    }

    getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( response => {
       //   console.log(response.json());
           return response.json();
        })
        .then(digestedResponse => {
            this.setState({posts: digestedResponse});
        })
    }
      getToDos() {
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
          console.log("AXIOS RESPONSE: ", response.data);
          this.setState({todos: response.data})
        });

    }

    render() {
        console.log('this.state: ', this.state);
        console.log("this.state.todos " + this.state.todos);
        const todos = this.state.todos.map(response => {

            return (
                (
                <tr>
                    <td>{response.userId}</td>
                    <td>{response.id}</td>
                    <td>{response.title}</td>
                </tr>
                )
            )
        });
            const posts = this.state.posts.map(response => {
    
                return (
                    (
                    <tr>
                        <td>{response.userId}</td>
                        <td>{response.id}</td>
                        <td>{response.title}</td>
                        <td>{response.completed}</td>
                    </tr>
                    )
                )
            });

        return (
            <div id="container">
                <div id="header">
                    <button onClick={this.getToDos}>GET TODOS</button>
                    <button onClick={this.getPosts}>GET POSTS</button>
                </div>
            <div className="resultsContainer">
                <div className="todos">
                    <table>
                        <thead>
                            <tr>
                                <th>UserId</th>
                                <th>ID</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos}
                        </tbody>
                    </table>
                </div>
                 <div className="posts">
                    <table>
                        <thead>
                            <tr>
                                <th>UserID</th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts}
                        </tbody>
                    </table>
               </div>
            </div>
        </div>
            
        )
    }
}
export default FetchandAxios;