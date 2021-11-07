import React, { Component } from 'react';

class Testifieritem extends Component {
    // state = {
    //     id: 'id',
    //     avatar_pic: {image},
    //     usersName: 'Joseph Ike',
    //     location: 'In Ikeja',
    //     post: 'Customer' 
   
    // };

    render() {
        const { avatar_pic, usersName, location, post, content} = this.props.testifier;
        return (
            <div className="card card__textbox">
                <img src={avatar_pic} 
                alt=""  
                className="card__round-img" 
                style={{width: "200px"}} 
                />
                <h1 className="card__users">{usersName}</h1>
                <h4 className="card__location">
                    {location} <span />
                    <p className="card__post">
                        {post}
                    </p>
                </h4>
                <div className="card__content">
                    {content}
                </div>
        

            </div>
        );
    
    }
}

export default Testifieritem
