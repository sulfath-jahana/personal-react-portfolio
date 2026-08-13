function Header(props){
    console.log(props, "this is props")
    return(
        <>
        <h2>this is header component
        </h2>
        <h2>no no {props.fullname}is my name</h2>
        </>
    )
}
export default Header;