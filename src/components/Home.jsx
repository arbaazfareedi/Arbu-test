const Home = (props) => {
    console.log(props.data);
    return(
        <div>
            <button onClick={()=>props.addtocartHandler({price:1000,name:'iPhone'})}>Add To Cart</button>
            <div>{props.data.length}</div>
        </div>
    )
}

export default Home;