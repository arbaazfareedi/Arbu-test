import {  connect } from "react-redux";
import Home from "../components/Home";
import { addtocart } from "../Services/Actions/action";

const mapStateToProps=state=>({
    data: state.cardItems
})

const mapDispatchToProps=dispatch=>({
    addtocartHandler:data=>dispatch(addtocart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)

// export default Home;