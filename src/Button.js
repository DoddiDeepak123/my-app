function Button(){
 console.log('Button props:',props);
    
}

return (
    <button>
        {props.label}
    </button>
);


export default Button;