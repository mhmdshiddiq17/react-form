import Input from "./input";
import Label from "./label";
import './../../style.css';
const InputField = (props) => {
    const {label, nama, type, placeholder} = props;
    return (
        <div className="mb-6">
            <Label htmlFor={nama}>{label}</Label>
            <Input type={type} name={nama} placeholder={placeholder}/>
        </div>
    )
}

export default InputField;