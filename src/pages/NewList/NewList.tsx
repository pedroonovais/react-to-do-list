import { FormWrapper } from "../../components/FormWrapper/FormWrapper";
import { IconWrapper } from "../../components/IconWrapper/IconWrapper";
import { Input } from "../../components/Input/Input";
import { Layout } from "../../components/Layout/Layout";
import { Title } from "../../components/Title/Title";
import { BiAddToQueue } from "react-icons/bi";

export default function NewList(){
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
                    />
                    <IconWrapper>
                        <BiAddToQueue size="1.8rem" color="var(--primary-color)"/>
                    </IconWrapper>
                </FormWrapper>
            </form>
        </Layout>
    )
}