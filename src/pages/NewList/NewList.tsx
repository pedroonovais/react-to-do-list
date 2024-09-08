import { useState } from "react";
import { FormWrapper } from "../../components/FormWrapper/FormWrapper";
import { IconWrapper } from "../../components/IconWrapper/IconWrapper";
import { Input } from "../../components/Input/Input";
import { Layout } from "../../components/Layout/Layout";
import { Title } from "../../components/Title/Title";
import { BiAddToQueue } from "react-icons/bi";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { CheckboxWrapper } from "../../components/CheckboxWrapper/CheckboxWrapper";

export default function NewList(){
    const [taskList, setTaskList] = useState<string[]>([])
    const [inputTask, setInputTask] = useState<string>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTask(event.target.value)
    }   

    const handleClick = () => {
        if (inputTask.trim()){
            setTaskList([...taskList, inputTask])
            setInputTask("")
        }
    }

    return(
        <Layout>
            <Title>Nova lista</Title>
            <form>
                <FormWrapper>
                    <Input 
                        type="text" 
                        name="new-task" 
                        id="new-task" 
                        placeholder="Digite o item desejado"
                        label="Adicionar item"
                        onChange={handleChange}
                        value={inputTask}
                    />
                    <IconWrapper onClick={handleClick}>
                        <BiAddToQueue size="1.8rem" color="var(--primary-color)"/>
                    </IconWrapper>
                </FormWrapper>
            </form>

            <CheckboxWrapper>
                {taskList.map((task, index) => (
                    <li>
                        <Checkbox 
                            key={index} 
                            name={task} 
                            id={task} 
                            label={task}/>
                    </li>                
                ))}
            </CheckboxWrapper>
            

        </Layout>
    )
}