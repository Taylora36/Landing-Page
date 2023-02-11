import React from "react";
//import ReactDOM from "react-dom";
import PropType from "prop-types";

// function App(){
//     return (
//         <div className="wrapper">
//             <Card 
//             title="Card title"
//             imageUrl="https://cms-assets.tutsplus.com/cdn-cgi/image/width=844/uploads/users/1990/posts/36852/image-upload/_0012_Photoshop_KHLjWR6or4.jpg"
//             text="Tatooine"
//             />
//             <Card 
//             title="Card title"
//             imageUrl="https://cdn.jwplayer.com/v2/media/HhYvseJN/poster.jpg?width=1920"
//             text="Coruscant"/>
//             <Card 
//             title="Card title"
//             imageUrl="https://img3.pillowfort.social/posts/ef1f2329cd3ce70579a1.png"
//             text="Dathomir"/>
//             <Card
//             title="Card title"
//             imageUrl="https://pyxis.nymag.com/v1/imgs/0a6/d83/8ceca4122490e778386663a5d9cdd5cbaf-andor.2x.rsocial.w600.jpg"
//             text="Niamos"/>
//         </div>
//     )
// };

const Card = (props) => {
    const style = {
        width: "18rem"
    }
    return (
        <div className="card" style={style}>
            <img src={props.imageUrl}
            className="card-img-top"
            alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title ? props.title: "Default title"}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">{props.btnText ? props.btnText : "Plan My Trip"}</a>
            </div>
        </div>
    );
};


Card.propTypes = {
    title: PropType.string,
    imageURL: PropType.string,
    text: PropType.string,
    //button: PropType.string,
};

// ReactDOM.render(
//     <Card
//     />,
//     document.getElementById("root")
// );


export default Card;