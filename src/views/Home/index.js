
import { Container, Row } from "react-bootstrap";
import { FormHotel } from "../../components/FormHotel";
import { Layout } from "../../components/Layout";
import styled from 'styled-components'


export function HomeView() {

    return (
        <>
            <Layout>
                <StyledContainer>
                    <div>
                        <h4 className="text-md-left nt-4">Filtrar resultados por:</h4>
                        <FormHotel />
                    </div>
                    <Row>
                        <h3>Hotéis</h3>
                    </Row>
                </StyledContainer>
            </Layout>
        </>
    )
}

const StyledContainer = styled(Container)`
display: flex ;`