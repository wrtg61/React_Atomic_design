import { Button } from '../../Atoms';
import {Select, InputBox} from '../../Molcules'

export const Form =() =>{
    return (
        <>
        <Select name='kind' value='1' option='종류1' />
        <InputBox />
        <Button type='button'> 입력</Button>
        </>
    );
}