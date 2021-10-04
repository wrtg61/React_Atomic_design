import { Input } from '../../Atoms';
import './InputBox.css'; //css import



export const InputBox = () => {
    return (
        <>
        <Input type='text' name='name'/>
        <Input type='number' name='count'/>
        </>
    );
}