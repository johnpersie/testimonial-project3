import React, { Component } from 'react'

class Testifieritem2 extends Component {
      
    render() {
        const {avatar_pic, content, title, textContent} = this.props.user
        return (
            <div className="card card__textbox">
                <img src={avatar_pic} 
                alt=""  
                className="card__round-img" 
                style={{width: "200px"}} 
                />
                <h1 className="card__users">{content}</h1>
                <p className=" card__location card__location--card__title">
                    {title}
                </p>
                <div className="card__content">
                    {textContent}
                </div>
        

            </div>
        );
    
    }
}

export default Testifieritem2
