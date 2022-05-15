import styled from "styled-components";
import globalConfig from "../../../utils";

export const Container = styled.main`
    margin: 50px auto;
    width: 95%;
    max-width: ${globalConfig.maxWidth};

    @media (min-width: ${globalConfig.minWidth}) {
    }
`;
