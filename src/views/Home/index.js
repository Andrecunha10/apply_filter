
import {Container, Row } from "react-bootstrap";
import { Layout } from "../../components/Layout";

export function HomeView() {

    return (
        <>
            <Layout>
                <Container>
                    <h4 className="text-md-left nt-4">Filtros</h4>
                    <Row>
                        <h3>Hotels</h3>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}
