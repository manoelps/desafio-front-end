import { FC, useState } from "react";
import { Container, Title, TitleDescription, Body, IconContainer } from "./style";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import SubItem from "./components/SubItem";
import { IUsuario } from "../../interfaces/interface.usuario";

interface IAccordion {
    usuarioView: IUsuario;
}

const Accordion: FC<IAccordion> = ({ usuarioView }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Container>
            <Title onClick={() => setIsOpen(!isOpen)}>
                <TitleDescription>{usuarioView.name}</TitleDescription>
                <IconContainer>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</IconContainer>
            </Title>

            <Body isOpen={isOpen}>
                <SubItem key={usuarioView.cpf} registro={usuarioView} />
            </Body>
        </Container>
    );
};

export default Accordion;
